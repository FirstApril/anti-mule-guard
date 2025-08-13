import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertTriangle, Info, CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const alertCalloutVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        warning: "border-warning/50 text-warning-foreground bg-warning/10 [&>svg]:text-warning",
        destructive: "border-destructive/50 text-destructive-foreground bg-destructive/10 [&>svg]:text-destructive",
        success: "border-success/50 text-success-foreground bg-success/10 [&>svg]:text-success",
        info: "border-primary/50 text-primary-foreground bg-primary/10 [&>svg]:text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const AlertCallout = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertCalloutVariants>
>(({ className, variant, children, ...props }, ref) => {
  const Icon = {
    default: Info,
    warning: AlertTriangle,
    destructive: XCircle,
    success: CheckCircle,
    info: Info,
  }[variant || "default"];

  return (
    <div
      ref={ref}
      role="alert"
      className={cn(alertCalloutVariants({ variant }), className)}
      {...props}
    >
      <Icon className="h-4 w-4" />
      <div>{children}</div>
    </div>
  );
});

AlertCallout.displayName = "AlertCallout";

const AlertCalloutTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertCalloutTitle.displayName = "AlertCalloutTitle";

const AlertCalloutDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertCalloutDescription.displayName = "AlertCalloutDescription";

export { AlertCallout, AlertCalloutTitle, AlertCalloutDescription };