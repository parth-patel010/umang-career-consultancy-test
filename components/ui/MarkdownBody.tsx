export function MarkdownBody({ html, className = "" }: { html: string; className?: string }) {
  return (
    <div
      className={`prose-umang space-y-4 text-[1.05rem] leading-relaxed text-ink [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_a]:text-brand [&_a]:font-medium [&_a:hover]:underline ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
