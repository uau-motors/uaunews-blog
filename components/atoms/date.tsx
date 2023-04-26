import { parseISO, format } from "date-fns";
import React from "react";

interface Props {
  dateString: string;
  locale: Locale;
}

const Date: React.FC<Props> = ({ dateString, locale = "ptBR" }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "d LLLL, yyyy")}</time>;
};

export default Date;
