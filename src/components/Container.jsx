export default function Container({ children }) {
  return (
    <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-10 lg:px-16 w-full overflow-hidden">
      {children}
    </div>
  );
}
