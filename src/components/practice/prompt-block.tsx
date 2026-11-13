export function PromptBlock({ text }: { text: string }) {
  return (
    <pre className="mt-4 max-w-full overflow-x-auto whitespace-pre-wrap break-words rounded-[10px] border-2 border-ink bg-paper p-4 font-mono text-sm leading-6 text-ink">
      {text}
    </pre>
  );
}
