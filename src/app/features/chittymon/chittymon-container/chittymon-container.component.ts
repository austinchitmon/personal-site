import {
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import Matter, {
  Bodies,
  Engine,
  Mouse,
  MouseConstraint,
  Render,
  World,
} from 'matter-js';
import { RandomNumberService } from '../../../shared/services/random-number.service';
import { POKEBALL_SPRITE_CHANCES } from '../consts/pokeball-chances.const';

@Component({
  selector: 'app-chittymon-container',
  imports: [],
  template: `
    <canvas id="full-canvas"
            class="demo"></canvas>
  `,
  styleUrl: './chittymon-container.component.scss',
})
export class ChittymonContainerComponent implements OnInit {
  constructor(
    private readonly random: RandomNumberService
  ) {}

  private engine!: Engine;
  private render!: Render;
  private ground!: Matter.Body;
  private leftWall!: Matter.Body;
  private rightWall!: Matter.Body;
  private topWall!: Matter.Body;

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.handleResize();
  }

  public ngOnInit() {
    this.engine = Engine.create();
    const world = this.engine.world;
    const canvas = document.getElementById('full-canvas') as HTMLCanvasElement;

    const width = window.innerWidth;

    const height = window.innerHeight - 200;
    this.render = Render.create({
      canvas: canvas,
      engine: this.engine,
      options: {
        width,
        height,
        wireframes: false,
        background: 'black'
      }
    });

    const wallThickness = 50; // Arbitrary thickness for the walls
    this.ground = Bodies.rectangle(width / 2, height + wallThickness / 2, width, wallThickness, { isStatic: true, label: 'ground' });
    this.leftWall = Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, { isStatic: true, label: 'leftWall' });
    this.rightWall = Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height, { isStatic: true, label: 'rightWall' });
    this.topWall = Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, { isStatic: true, label: 'topWall' });
    const ball = Bodies.circle(
      300,
      300,
      33,
      {
        render: {
          sprite: {
            texture: this.random.getWeightedRandomItem(POKEBALL_SPRITE_CHANCES),
            xScale: 1.5,
            yScale: 1.5
          }
        }
      }
    );

    // Add bodies to the world
    World.add(world, [this.ground, this.leftWall, this.rightWall, this.topWall, ball]);

    const mouse = Mouse.create(canvas);
    const mouseConstraint = MouseConstraint.create(this.engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2, // Stiffness of the spring
        render: {
          visible: false, // Set to true to see the spring
        },
      },
    });

    // Add mouse constraint to the world
    World.add(world, mouseConstraint);

    // Enable mouse control in the render
    this.render.mouse = mouse;

    const update = () => {
      Engine.update(this.engine, 1000 / 120); // Run the engine at 60 FPS
      requestAnimationFrame(update);
    };
    update();

    Render.run(this.render);
  }

  private handleResize() {
    const width = window.innerWidth;
    const height = window.innerHeight - 200;

    // Update renderer dimensions
    this.render.options.width = width;
    this.render.options.height = height;
    this.render.canvas.width = width;
    this.render.canvas.height = height;

    World.remove(this.engine.world, [this.ground, this.leftWall, this.rightWall, this.topWall]);

    const wallThickness = 50;

    this.ground = Bodies.rectangle(width / 2, height + wallThickness / 2, width, wallThickness, { isStatic: true, label: 'ground' });
    this.leftWall = Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, { isStatic: true, label: 'leftWall' });
    this.rightWall = Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height, { isStatic: true, label: 'rightWall' });
    this.topWall = Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, { isStatic: true, label: 'topWall' });

    World.add(this.engine.world, [this.ground, this.leftWall, this.rightWall, this.topWall]);
  }
}
