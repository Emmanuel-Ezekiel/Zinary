export function getStatusColor(status: string) {
  switch (status) {
    case "Successful":
      return "bg-[#31D067]";
    case "Pending":
      return " bg-[#FFA349] ";
    case "Failed":
      return " bg-[#EA523D]";
    default:
      return "black"; // Default color if status doesn't match any case
  }
}
export function getButtonStatusColor(status: string) {
  switch (status) {
    case "Successful":
      return "#FFFFFF";
    case "Pending":
      return " bg-[#FFFFFF] ";
    case "Failed":
      return " bg-[#EA523D]";
    default:
      return "black"; // Default color if status doesn't match any case
  }
}
