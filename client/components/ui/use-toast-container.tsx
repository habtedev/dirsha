import * as React from "react";
import { ToastProvider, useToast as useToastContext, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose } from "@/components/ui/toast-primitive";

export function ToastContainer() {
  const { toasts, removeToast } = useToastContext();

  return (
    <ToastProvider>
      <ToastViewport />
      {toasts.map((toast) => (
        <Toast key={toast.id} open={true} onOpenChange={() => removeToast(toast.id)}>
          <ToastTitle>{toast.title}</ToastTitle>
          <ToastDescription>{toast.description}</ToastDescription>
          <ToastClose />
        </Toast>
      ))}
    </ToastProvider>
  );
}
