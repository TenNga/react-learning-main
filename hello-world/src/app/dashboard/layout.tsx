import Card from "../components/Card";

function DashboardLayout({
    children,
    notifications,
    revenues,
    users
  }: {
    children: React.ReactNode,
    notifications: React.ReactNode,
    revenues: React.ReactNode,
    users: React.ReactNode,
  }) {
    return (
      <div>
        <div>{children}</div>
        <div style={{display: "flex"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <Card>{users}</Card>
                <Card>{revenues}</Card>
            </div>
            <Card style={{display: "flex", flex: 1 }}>{notifications}</Card>
        </div>
      </div>
    )
  };

  export default DashboardLayout;