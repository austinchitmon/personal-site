---
title: Typescript / Angular 20+ Coding Standards
cover: angular-coding-standard.png
subtitle: My personal collection of standards for building robust, responsive Angular applications using PrimeNG.
date: 2025-08-27T00:01:00-05:00
tags:
  - typescript
  - angular
  - PrimeNG
---

# Typescript / Angular 20+ Coding Standards

This list will be constantly updated as I find new best practices and patterns!

## 1. Typing

- Everything must be typed:

  - Variables
    ```ts
    // ❌ DON'T
    let a: any = {type: 'chicken' sound: 'cluck'}
    // ✅ DO
    let a: Animal = {type: 'chicken' sound: 'cluck'}
    ```
  - Class members

    ```ts
    // ❌ DON'T
    class UserService {
      currentUser: any;
      isLoading: any;
    }
    // ✅ DO
    class UserService {
      currentUser: User | null = null;
      isLoading: boolean = false;
    }
    ```

  - Method parameters

    ```ts
    // ❌ DON'T
    updateUser(user, options) {
      // implementation
    }
    // ✅ DO
    updateUser(user: User, options: UpdateOptions): void {
      // implementation
    }
    ```

  - Method return types
    ```ts
    // ❌ DON'T
    getUsers() {
      return this.http.get('/api/users');
    }
    // ✅ DO
    getUsers(): Observable<User[]> {
      return this.http.get<User[]>('/api/users');
    }
    ```

- For `string` properties, prefer string unions (`|`) when values come from a finite set:

  ```ts
  // ❌ DON'T
  interface Status {
    code: string;
  }
  // ✅ DO
  type StatusCodes = "Active" | "Inactive" | "Pending" | "Errored";
  interface Status {
    loadStatus: StatusCodes;
  }
  ```

- Prefer `Type[]` over `Array<Type>`

  ```ts
  // ❌ DON'T
  const animals: Array<Animal> = [];
  // ✅ DO
  const animals: Animal[] = [];
  ```

- Use **helper types** (`Pick`, `Omit`, `Partial`, etc.) to reduce duplication:

  ```ts
  // ❌ DON'T
  interface User {
    id: string;
    name: string;
    email: string;
    password: string;
  }
  interface UserProfile {
    id: string;
    name: string;
    email: string;
  }
  // ✅ DO
  interface User {
    id: string;
    name: string;
    email: string;
    password: string;
  }
  type UserProfile = Omit<User, "password">;
  ```

- Selection-driven elements should be typed as `SelectItem<T>`:

  ```ts
  // ❌ DON'T
  interface DropdownOption {
    displayText: string;
    id: number;
  }
  const statusOptions: DropdownOption[] = [
    { displayText: "Active", id: 1 },
    { displayText: "Inactive", id: 0 },
  ];
  // ✅ DO
  const statusOptions: SelectItem<boolean>[] = [
    { label: "Active", value: true },
    { label: "Inactive", value: false },
  ];
  ```

  - `label`: UI display value

  - `value`: underlying business logic value

---

## 2. Arrays & Loops

- Prefer **array utility methods** over loops:

  - `for…push` → `.map()`

    ```ts
    // ❌ DON'T
    const userNames = [];
    for (const user of users) {
      userNames.push(user.name);
    }
    // ✅ DO
    const userNames = users.map((user) => user.name);
    ```

  - `for…if…push` → `.filter()`

    ```ts
    // ❌ DON'T
    const activeUsers = [];
    for (const user of users) {
      if (user.isActive) {
        activeUsers.push(user);
      }
    }
    // ✅ DO
    const activeUsers = users.filter((user) => user.isActive);
    ```

  - `for…if…assign` → `.find()`

    ```ts
    // ❌ DON'T
    let adminUser;
    for (const user of users) {
      if (user.role === "admin") {
        adminUser = user;
        break;
      }
    }
    // ✅ DO
    const adminUser = users.find((user) => user.role === "admin");
    ```

  - `for…if…return true` → `.some()`

    ```ts
    // ❌ DON'T
    function hasActiveUsers(users: User[]): boolean {
      for (const user of users) {
        if (user.isActive) {
          return true;
        }
      }
      return false;
    }
    // ✅ DO
    function hasActiveUsers(users: User[]): boolean {
      return users.some((user) => user.isActive);
    }
    ```

  - `for…if…return false` → `.every()`
    ```ts
    // ❌ DON'T
    function areAllUsersActive(users: User[]): boolean {
      for (const user of users) {
        if (!user.isActive) {
          return false;
        }
      }
      return true;
    }
    // ✅ DO
    function areAllUsersActive(users: User[]): boolean {
      return users.every((user) => user.isActive);
    }
    ```

---

## 3. Object Access

- Never use direct string indexing:

  ```ts
  // ❌ DON'T
  someObj["someProp"];

  // ✅ DO
  someObj.someProp;
  ```

---

## 4. Data Flow & Binding

- **Never use two-way binding** (`[(ngModel)]`):

  - Data should flow via:
    - Shared stores
    - Inputs / Outputs

  ```ts
  // ❌ DON'T
  @Component({
    template: `<input [(ngModel)]="userName" />`,
  })
  export class UserFormComponent {
    userName: string = "";
  }
  // ✅ DO
  @Component({
    template: `<input [value]="userName()" (nameChanged)="onUserNameChange($event)" />`,
  })
  export class UserFormComponent {
    userName = signal<string>("Jon Snow");

    onUserNameChange(event: Event): void {
      // update userName...
    }
  }
  ```

- Template bindings should not call methods directly, unless they are quick, simple getters. Use properties or signals:

  ```html
  <!-- ❌ DON'T -->
  <comp [prop]="someGiantLogicMethod()" />

  <!-- ✅ DO -->
  <comp [prop]="store.calculatedValue$ | ngrxPush" />

  <!-- ✅ DO -->
  <comp [prop]="mySignal()" />
  ```

---

## 6. Imports

- **Remove unused imports** and injected dependencies.

  - Exception: local variables for `toSignal`, `toObservable`, or `effect` (they serve descriptive purposes).

  ```ts
  // ✅ DO
  export class MyComponent {
    // appear unused, but acts as description for the toObservable, toSignal, effect action
    taskListUpdated = toObservable(this.store.taskList()).subscribe(...);

    formValue = toSignal(this.store.form.valueChanges$);

    logTaskList = effect(() => {
      console.log(this.store.taskList());
    })
  }
  ```

- **Import rules**:

  - Never import from the **root of PrimeNG**:

    ```ts
    // ❌ DON'T
    import { Button, Dropdown, Calendar } from "primeng";
    // ✅ DO
    import { Button } from "primeng/button";
    import { Dropdown } from "primeng/dropdown";
    import { Calendar } from "primeng/calendar";
    ```

  - Never use alias paths for imports **within the same Nx library**.

    ```typescript
    // ❌ DON'T
    // current file in shared
    import { OtherServiceInShared } from "@shared";

    // ✅ DO
    // current file in shared
    import { OtherServiceInLoadsShared } from "../other-service-in-shared.service";
    ```

  - Always use alias paths for imports **from separate Nx libraries**:

    ```ts
    // ❌ DON'T
    import { Something } from "../../../libs/shared/loads-shared/src/lib/something";
    import { UserService } from "../../../../libs/shared/user-shared/src/lib/services/user.service";
    // ✅ DO
    import { Something } from "@shared";
    import { UserService } from "@shared";
    ```

  - No absolute paths:

    ```ts
    // ❌ DON'T
    import { UserService } from "/src/app/shared/services/user.service";
    import { Component } from "/node_modules/@angular/core";
    // ✅ DO
    import { UserService } from "../shared/services/user.service";
    import { Component } from "@angular/core";
    ```

  - Never import from `dist`:

    ```ts
    // ❌ DON'T
    import { SomeLibrary } from "./dist/libs/some-library";
    import { Component } from "dist/some-package/component";
    // ✅ DO
    import { SomeLibrary } from "@company/some-library";
    import { Component } from "some-package/component";
    ```

---

## 7. Interfaces

- Minimize **optional fields**.

- Use `Omit`, `Pick`, `Partial`, `PartialPick` when deriving variations.

---

## 8. Access Modifiers

- Use the correct modifier for class members:

  - `public`: used in another class or template

  - `protected`: used only in the component’s template

  - `private`: used only within the class

  - Do not make class members or methods `public` just for test access. Cover these by consuming `public` methods that call the `private` methods.

---

## 9. Conditionals & Readability

- for simple `if else` assignments, use ternaries:

  ```ts
  // ❌ DON'T
  let status;
  if (user.isActive) {
    status = "online";
  } else {
    status = "offline";
  }
  // ✅ DO
  const status = user.isActive ? "online" : "offline";
  ```

- Keep conditional statements (`&&` / `||` chains) short and readable. Compose into sub-methods:

  ```ts
  // ❌ DON'T
  if (user && user.profile && user.profile.settings && user.profile.settings.notifications && user.profile.settings.notifications.email === true && user.isActive && !user.isBlocked) {
    sendEmail(user);
  }
  // ✅ DO
  const canReceiveEmail = user?.profile?.settings?.notifications?.email === true;
  const isEligibleUser = user?.isActive && !user?.isBlocked;
  if (canReceiveEmail && isEligibleUser) {
    sendEmail(user);
  }
  ```

- Use optional chaining (`?.`) whenever a value could be undefined or null:

  ```ts
  // ❌ DON'T
  const email = user && user.profile && user.profile.contact && user.profile.contact.email;
  const streetName = address && address.street && address.street.name;
  // ✅ DO
  const email = user?.profile?.contact?.email;
  const streetName = address?.street?.name;
  ```

- Use `||` or `??` to assign a default value instead of a ternary:

  ```ts
  // ❌ DON'T
  const displayName = user.name ? user.name : "Guest";
  const count = items.length ? items.length : 0;
  // ✅ DO
  const displayName = user.name || "Guest";
  const count = items.length ?? 0;
  ```

- Do not nest ternaries. Compose into sub-methods:

  ```ts
  // ❌ DON'T
  const userType = user.isAdmin ? "admin" : user.isPremium ? "premium" : user.isActive ? "active" : "inactive";
  // ✅ DO
  function getUserType(user: User): string {
    if (user.isAdmin) return "admin";
    if (user.isPremium) return "premium";
    if (user.isActive) return "active";
    return "inactive";
  }
  const userType = getUserType(user);
  ```

- Use `array.includes` for group-based conditional checks instead of `=== ||` chains:

  ```ts
  // ❌ DON'T
  if (x === y || x === z || x === a) {
    doSomething();
  }
  // ✅ DO
  if ([y, z, a].includes(x)) {
    doSomething();
  }
  ```

---
