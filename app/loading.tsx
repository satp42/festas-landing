export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-spektr-cyan-50"></div>
        <p className="text-sm text-muted-foreground">Loading Festas...</p>
      </div>
    </div>
  );
} 