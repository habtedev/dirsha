// toast-primitive.tsx
// Placeholder for toast primitives. Replace with your actual implementation.
import * as React from "react";

export const ToastProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
// Define a type for the toast object
type PrimitiveToast = {
	id: string;
	title?: React.ReactNode;
	description?: React.ReactNode;
};

// Example placeholder toasts array for type safety
export const useToast = () => ({
	toasts: [] as PrimitiveToast[],
	removeToast: (_id: string) => {},
});
export const ToastViewport = (props: any) => <div {...props} />;
export const Toast = (props: any) => <div {...props} />;
export const ToastTitle = (props: any) => <div {...props} />;
export const ToastDescription = (props: any) => <div {...props} />;
export const ToastClose = (props: any) => <button {...props}>Close</button>;
