import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  AfterViewInit,
  viewChild,
  inject,
} from '@angular/core';
import Matter, {
  Bodies, Engine, Mouse, MouseConstraint, Render, World,
} from 'matter-js';
import { RandomNumberService } from '../../../../shared/services/random-number.service';
import { POKEBALL_SPRITE_CHANCES } from '../consts/pokeball-chances.const';

@Component({
  selector: 'app-chittymon-container',
  imports: [],
  template: `<canvas #canvas class="demo"></canvas>`,
  styleUrl: './chittymon-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChittymonContainerComponent implements AfterViewInit, OnDestroy {
  private readonly random = inject(RandomNumberService);
  private readonly hostRef = inject(ElementRef<HTMLElement>);

  private readonly canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  private engine!: Engine;
  private render!: Render;
  private ground!: Matter.Body;
  private leftWall!: Matter.Body;
  private rightWall!: Matter.Body;
  private topWall!: Matter.Body;
  private resizeObserver?: ResizeObserver;

  public ngAfterViewInit(): void {
    const canvas = this.canvasRef().nativeElement;
    const { width, height } = this.getHostSize();

    this.engine = Engine.create();
    const world = this.engine.world;

    this.render = Render.create({
      canvas,
      engine: this.engine,
      options: { width, height, wireframes: false, background: 'black' },
    });

    this.createWalls(width, height);

    const ball = Bodies.circle(width / 2, height / 3, 33, {
      render: {
        sprite: {
          texture: this.random.getWeightedRandomItem(POKEBALL_SPRITE_CHANCES),
          xScale: 1.5,
          yScale: 1.5,
        },
      },
    });
    World.add(world, [this.ground, this.leftWall, this.rightWall, this.topWall, ball]);

    const mouse = Mouse.create(canvas);
    const mouseConstraint = MouseConstraint.create(this.engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    World.add(world, mouseConstraint);
    this.render.mouse = mouse;

    const update = () => {
      Engine.update(this.engine, 1000 / 120);
      requestAnimationFrame(update);
    };
    update();
    Render.run(this.render);

    this.resizeObserver = new ResizeObserver(() => this.handleResize());
    this.resizeObserver.observe(this.hostRef.nativeElement);
  }

  public ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }

  private getHostSize(): { width: number; height: number } {
    const rect = this.hostRef.nativeElement.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  }

  private createWalls(width: number, height: number): void {
    const wallThickness = 50;
    this.ground = Bodies.rectangle(width / 2, height + wallThickness / 2, width, wallThickness, { isStatic: true, label: 'ground' });
    this.leftWall = Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, { isStatic: true, label: 'leftWall' });
    this.rightWall = Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height, { isStatic: true, label: 'rightWall' });
    this.topWall = Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, { isStatic: true, label: 'topWall' });
  }

  private handleResize(): void {
    const { width, height } = this.getHostSize();
    if (width === 0 || height === 0) return;

    this.render.options.width = width;
    this.render.options.height = height;
    this.render.canvas.width = width;
    this.render.canvas.height = height;

    World.remove(this.engine.world, [this.ground, this.leftWall, this.rightWall, this.topWall]);
    this.createWalls(width, height);
    World.add(this.engine.world, [this.ground, this.leftWall, this.rightWall, this.topWall]);
  }
}
