import { ModeToggle } from "@/components/mode-toggle";

export default function TestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Test Page</h1>
      <p className="mb-4">This is a simple test page to demonstrate basic Next.js functionality.</p>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Features:</h2>
        <ul className="list-disc list-inside">
          <li>Next.js App Router</li>
          <li>Tailwind CSS for styling</li>
          <li>Dark mode toggle</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Dark Mode Toggle:</h2>
        <ModeToggle />
      </div>

      <div className="mt-8">
        
      </div>
    </div>
  );
}
