function SectionTitle({
  children,
  className = "sm:text-5xl text-3xl",
  underline = true,
}) {
  return (
    <div className="w-fit">
      <h1 className={`relative font-bold ${className}`}>{children}</h1>
      {underline && (
        <span className="mt-2 sm:mt-3 block h-0.5 w-1/3 rounded-full bg-primary"></span>
      )}
    </div>
  );
}

export { SectionTitle };
