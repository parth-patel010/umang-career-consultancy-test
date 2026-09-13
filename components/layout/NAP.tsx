import { SITE } from "@/lib/site";

export function NAP({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-1 text-sm ${className}`}>
      <p>
        <a className="font-semibold hover:text-brand" href={`tel:${SITE.phoneTel}`}>
          {SITE.phone}
        </a>
      </p>
      <p>
        <a className="hover:text-brand" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
      </p>
      <p className="text-muted leading-relaxed">{SITE.fullAddress}</p>
    </div>
  );
}
