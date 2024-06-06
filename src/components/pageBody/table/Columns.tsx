"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  photo: string;
  name: string;
  position: string;
  salary: number;
  bonus: number;
  hours: number;
  payed: number;
  status: any;
  more: any;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Нэр",
  },
  {
    accessorKey: "position",
    header: "Албан тушаал",
  },
  {
    accessorKey: "salary",
    header: "Үндсэн цалин",
  },
  {
    accessorKey: "bonus",
    header: "Бонус",
  },
  {
    accessorKey: "hours",
    header: "Ажилсан цаг",
  },
  {
    accessorKey: "payed",
    header: "Гарт олгох",
  },
  {
    accessorKey: "status",
    header: "Төлөв",
  },
  {
    accessorKey: "more",
    header: "Дэлгэрэнгүй",
  },
];
