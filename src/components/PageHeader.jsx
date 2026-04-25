export default function PageHeader({ title, breadcrumb, children }) {
  return (
    <div className="mb-6">

      <div className="flex justify-between items-center mb-4">
        
        <div>
          <h1 className="text-xl font-bold">{title}</h1>

          <div className="text-gray-400 text-sm">
            {Array.isArray(breadcrumb)
              ? breadcrumb.join(" / ")
              : breadcrumb}
          </div>
        </div>

        <div>
          {children}
        </div>

      </div>

    </div>
  );
}