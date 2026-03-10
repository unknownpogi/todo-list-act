import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTask, deleteSelectedTask, getAllTasks, getTask, updateTask } from "@/services/tasks";

// Custom hook, NOT a normal function
export const useAllTasks = () => {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: getAllTasks
  });
};

export const useTask = (id?: string) => {
  return useQuery({
    queryKey: ['tasks', id],
    queryFn: () => getTask(id!),
    enabled: !!id
  })
}

export const useAddTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['add-task'],
    mutationFn: addTask,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['tasks']})
    }
  })
}

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['update-task'],
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['tasks']})
    }
  })
}


export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['delete-task'],
    mutationFn: (id:string) => deleteSelectedTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    }
  })
}