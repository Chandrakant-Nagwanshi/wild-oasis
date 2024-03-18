import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const [serachParams] = useSearchParams();
  const numDays = !serachParams.get("last")
    ? 7
    : Number(serachParams.get("last"));
  const queryDays = subDays(new Date(), numDays).toISOString();

  const { data: bookings, isLoading } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDays),
    queryKey: ["bookings", `last-${numDays}`],
  });
  return { isLoading, bookings };
}
