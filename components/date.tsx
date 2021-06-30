import { parseISO, format } from "date-fns";

interface Props {
  dateString: string;
  className?: string;
}

const Date: React.FC<Props> = ({ dateString, className }) => {
  const date = parseISO(dateString);
  return (
    <div className={className}>
      <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>
    </div>
  );
};

export default Date;
