import { useEffect, useRef, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

const BOARD_SIZE = 20;
const INITIAL_SNAKE: Position[] = [{ x: Math.floor(BOARD_SIZE / 2), y: Math.floor(BOARD_SIZE / 2) }];
const INITIAL_DIRECTION: Position = { x: 1, y: 0 };
const SPEED = 200; // milliseconds

function getRandomFood(occupied: Position[]): Position {
  // Keep generating until we find a free cell
  // In worst case board full; but this simple game ends before that
  while (true) {
    const food = {
      x: Math.floor(Math.random() * BOARD_SIZE),
      y: Math.floor(Math.random() * BOARD_SIZE)
    };
    if (!occupied.some((s) => s.x === food.x && s.y === food.y)) {
      return food;
    }
  }
}

export default function Play() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [direction, setDirection] = useState<Position>(INITIAL_DIRECTION);
  const [food, setFood] = useState<Position>(() => getRandomFood(INITIAL_SNAKE));
  const [running, setRunning] = useState(true);

  // Draw the board
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const cellSize = canvas.width / BOARD_SIZE;

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * cellSize, food.y * cellSize, cellSize, cellSize);

    // Snake
    ctx.fillStyle = 'lime';
    snake.forEach((segment) => {
      ctx.fillRect(segment.x * cellSize, segment.y * cellSize, cellSize, cellSize);
    });
  }, [snake, food]);

  // Update snake movement
  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = prev[0];
        const newHead = { x: head.x + direction.x, y: head.y + direction.y };

        // Check collisions
        if (
          newHead.x < 0 ||
          newHead.y < 0 ||
          newHead.x >= BOARD_SIZE ||
          newHead.y >= BOARD_SIZE ||
          prev.some((s) => s.x === newHead.x && s.y === newHead.y)
        ) {
          setRunning(false);
          return prev;
        }

        const grows = newHead.x === food.x && newHead.y === food.y;
        const newSnake = [newHead, ...prev];
        if (!grows) {
          newSnake.pop();
        } else {
          setFood(getRandomFood(newSnake));
        }
        return newSnake;
      });
    }, SPEED);
    return () => clearInterval(interval);
  }, [direction, food, running]);

  // Key controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!running && e.key === 'Enter') {
        // restart
        setSnake(INITIAL_SNAKE);
        setDirection(INITIAL_DIRECTION);
        setFood(getRandomFood(INITIAL_SNAKE));
        setRunning(true);
        return;
      }
      switch (e.key) {
        case 'ArrowUp':
          if (direction.y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x !== -1) setDirection({ x: 1, y: 0 });
          break;
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [direction, running]);

  const score = snake.length - 1;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        style={{ border: '1px solid #444', background: '#000' }}
      />
      <div style={{ color: running ? '#fff' : 'red', fontWeight: 600 }}>
        {running ? `Score: ${score}` : `Game Over - Score: ${score} (press Enter to restart)`}
      </div>
    </div>
  );
}
