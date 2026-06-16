// import UsersAnalytics from "./users-analytics";
// import RevenueMetrics from "./revenue-metrics";
// import Notifications from "./notifications";

export default function ComplexDashboardLayout({
  children,
  users, // @users folder name
  revenue, // @revenue folder name
  notifications, // @notifications folder name
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div> {/* Content from page.tsx */}
      {/* <UsersAnalytics />
      <RevenueMetrics />
      <Notifications /> */}
      <div className="flex">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </>
  );
}

// Render Multiple pages simultaneously within the same layout. This feature known as “slots”. To create a slot, use the @folder naming convention. Each defined slot (@folder) automatically becomes a prop in its corresponding layout.tsx file.
