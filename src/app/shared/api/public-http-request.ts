import { HttpContextToken } from '@angular/common/http';

// Public downloads must keep working without a Supabase session or token refresh.
export const PUBLIC_HTTP_REQUEST = new HttpContextToken<boolean>(() => false);
