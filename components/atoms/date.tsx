import { parseISO, format } from "date-fns";
import React from "react";
import ptBR from "date-fns/locale/pt-BR";

interface Props {
  dateString: string;
  formatDate?: string;
}

const Date: React.FC<Props> = ({
  dateString,
  formatDate = "d 'de' LLLL, yyyy",
}) => {
  const date = parseISO(dateString);
  return <span>{format(date, formatDate, { locale: ptBR })}</span>;
};

export default Date;
