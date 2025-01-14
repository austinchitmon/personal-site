import {
  Component,
  OnInit,
} from '@angular/core';
import {
  Bodies,
  Engine,
  Mouse,
  MouseConstraint,
  Render,
  World,
} from 'matter-js';
import { RandomNumberService } from '../../../shared/random-number.service';
import { POKEBALL_SPRITE_CHANCES } from '../consts/pokeball-chances.const';

@Component({
  selector: 'app-physics-test',
  imports: [],
  templateUrl: './physics-test.component.html',
  styleUrl: './physics-test.component.scss',
})
export class PhysicsTestComponent implements OnInit {
  constructor(
    private readonly random: RandomNumberService
  ) {}

  public ngOnInit() {
    const engine = Engine.create();
    const world = engine.world;
    const canvas = document.getElementById('demo') as HTMLCanvasElement;

    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: 600,
        height: 600,
        wireframes: false,
        background: 'black'
      }
    });

    const ground = Bodies.rectangle(400, 590, 810, 30, { isStatic: true });
    const wallLeft = Bodies.rectangle(0, 0, 20, 1200, { isStatic: true });
    const wallRight = Bodies.rectangle(600, 0, 20, 1200, { isStatic: true });
    const ball = Bodies.circle(
      300,
      300,
      33,
      {
        render: {
          sprite: {
            texture: this.random.getRandomValue(POKEBALL_SPRITE_CHANCES),
            xScale: 1.5,
            yScale: 1.5
          }
        }
      }
    );

    // Add bodies to the world
    World.add(world, [ground, wallLeft, wallRight, ball]);

    const mouse = Mouse.create(canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
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
    render.mouse = mouse;

    const update = () => {
      Engine.update(engine, 1000 / 120); // Run the engine at 60 FPS
      requestAnimationFrame(update);
    };
    update();

    Render.run(render);
  }
}
