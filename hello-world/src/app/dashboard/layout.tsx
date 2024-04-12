import Card from "../components/Card";

function DashboardLayout({
    children,
    notifications,
    revenues,
    users,
    login
  }: {
    children: React.ReactNode,
    notifications: React.ReactNode,
    revenues: React.ReactNode,
    users: React.ReactNode,
    login: React.ReactNode,
  }) {
    const isLogin = true;
    return (
      <div>
        {isLogin? 
        <>
        <div>{children}</div>
        <div style={{display: "flex"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <Card>{users}</Card>
                <Card>{revenues}</Card>
            </div>
            <Card style={{display: "flex", flex: 1 }}>{notifications}</Card>
        </div> 
        </>
        : 
        login 
  }
      </div>
    )
  };

  export default DashboardLayout;