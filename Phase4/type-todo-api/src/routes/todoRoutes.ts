import { Request, Response, Router } from "express";
import { TodoList } from "../data/todoStore";
import { todo } from "../types";
import AppError from "../errors/AppError";
import asyncHandler from "../middleware/asyncHandler";

interface CreateTodoBody {
  title: string;
}

interface UpdateTodoBody {
  title: string;
}

const router = Router();

router.post("/", asyncHandler(async (req: Request<{}, {}, CreateTodoBody>, res: Response) => {
  const { title } = req.body;

  const newTodo: todo = {
    id: TodoList.length + 1,
    title,
    status: "active"
  };

  TodoList.push(newTodo);
  res.status(201).json(newTodo);
}));

router.get("/", asyncHandler(async (req, res: Response<todo[]>) => {
  console.log(TodoList)
  res.json(TodoList);
}));

router.get(
  "/:id",
  asyncHandler(async (req: Request<{ id: string }>, res: Response<todo | { message: string }>) => {
    const todoId = parseInt(req.params.id);
    const todoItem = TodoList.find((item) => item.id === todoId);

    if (!todoItem) {
      throw new AppError("Todo not found", 404);
    }

    res.json(todoItem);
  })
);

router.put(
  "/:id",
  asyncHandler(async (req: Request<{ id: string }, {}, UpdateTodoBody>, res: Response<todo | { message: string }>) => {
    const todoId = parseInt(req.params.id);
    const todoItem = TodoList.find((item) => item.id === todoId);

    if (!todoItem) {
      throw new AppError("todo not found",404);
    }

    todoItem.title = req.body.title;
    res.json(todoItem);
  })
);


router.delete(
  "/:id",
  asyncHandler(async (req: Request<{ id: string }>, res: Response<{ message: string }>) => {
    const todoId = parseInt(req.params.id);
    const index = TodoList.findIndex((item) => item.id === todoId);

    if (index === -1) {
      throw new AppError("Todo not found ",404);
    }

    TodoList.splice(index, 1);
    res.json({ message: "Todo deleted successfully" });
  })
);

export default router;