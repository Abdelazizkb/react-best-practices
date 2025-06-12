import Chart from "react-apexcharts";
import styles from "./styles.module.scss";
import Card from "./card";

const DashboardStatistics = () => {
  const taskStats = [
    { label: "Tasks Completed", value: 125 },
    { label: "In Progress Tasks", value: 37 },
    { label: "Upcoming Reminders", value: 12 },
    { label: "Overdue Tasks", value: 5 },
  ];

  const barChartOptions = {
    chart: { type: "bar" },
    xaxis: { categories: ["Draft", "In Progress", "Done"] },
  };
  const barChartSeries = [{ name: "Tasks", data: [18, 37, 125] }];

  const lineChartOptions = {
    chart: { type: "line" },
    xaxis: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
  };
  const lineChartSeries = [
    { name: "Tasks Completed", data: [12, 14, 20, 25, 22, 30, 28] },
  ];

  const activityBreakdown = [
    { category: "Most Active Day", value: "Wednesday" },
    { category: "Longest Task", value: "Implement CI/CD – 5 days" },
    { category: "Fastest Task", value: "Fix typo – 15 mins" },
    { category: "Average Duration", value: "1.7 days" },
    { category: "Repeating Tasks Active", value: 23 },
  ];

  return (
    <div className={styles.dashboardStatistics}>
      {/* Top Section - Overview Cards */}
      <div className={styles.overviewGrid}>
        {taskStats.map((stat, i) => (
          <Card key={i}>
            <h3 className={styles.statValue}>{stat.value}</h3>
            <p className={styles.statLabel}>{stat.label}</p>
          </Card>
        ))}
      </div>

      {/* Middle Section - Visual Analytics */}
      <div className={styles.chartsGrid}>
        <Card>
          <h3 className={styles.chartTitle}>Tasks by Status</h3>
          <Chart
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            options={barChartOptions as any}
            series={barChartSeries}
            type="bar"
            height={300}
          />
        </Card>
        <Card>
          <h3 className={styles.chartTitle}>Daily Task Completion</h3>
          <Chart
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            options={lineChartOptions as any}
            series={lineChartSeries}
            type="line"
            height={300}
          />
        </Card>
      </div>

      {/* Bottom Section - Activity Breakdown */}
      <Card>
        <h3 className={styles.chartTitle}>Activity Breakdown</h3>
        <ul className={styles.activityList}>
          {activityBreakdown.map((item, i) => (
            <li key={i} className={styles.activityItem}>
              <span className={styles.activityLabel}>{item.category}</span>
              <span className={styles.activityValue}>{item.value}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default DashboardStatistics;
