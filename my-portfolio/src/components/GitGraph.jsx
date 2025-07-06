import { useEffect, useState, useCallback } from "react";
import { ActivityCalendar } from "react-activity-calendar";

const GitGraph = () => {
  const [contributionData, setContributionData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContributions = useCallback(async () => {
    try {
      const response = await fetch("https://github.vineet.pro/api/nawabSRJ");
      const result = await response.json();
      setContributionData(result.data || []);
    } catch (error) {
      console.error("Failed to fetch GitHub contributions:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContributions();
  }, [fetchContributions]);

  return (
    <div className="mt-10 px-4 flex justify-center">
      <ActivityCalendar
        data={contributionData}
        loading={loading}
        blockMargin={4}
        blockSize={13}
        fontSize={14}
        theme={{
          dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
          light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
        }}
        colorScheme="auto"
        labels={{
          totalCount: "{{count}} contributions in the last year",
        }}
      />
    </div>
  );
};

export default GitGraph;
