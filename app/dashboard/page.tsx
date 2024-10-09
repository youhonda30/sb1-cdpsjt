export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">ダッシュボード</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">総申込数</h3>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">120</div>
            <p className="text-xs text-muted-foreground">
              +10% from last month
            </p>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">今月の申込数</h3>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">30</div>
            <p className="text-xs text-muted-foreground">
              +5% from last month
            </p>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">個人申込数</h3>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">80</div>
            <p className="text-xs text-muted-foreground">
              +15% from last month
            </p>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">団体申込数</h3>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">40</div>
            <p className="text-xs text-muted-foreground">
              +5% from last month
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}