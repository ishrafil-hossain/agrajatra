"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const data = [
  { name: "Ishrafil", shares: 1 },
  { name: "Monir", shares: 5 },
  { name: "Maiful", shares: 5 },
  { name: "Shakhawat", shares: 4 },
  { name: "Masud", shares: 3 },
  { name: "Alauddin", shares: 3 },
  { name: "Mohsin", shares: 2 },
  { name: "Shorif", shares: 1 },
];

const MONTHS = 8;
const PRICE_PER_SHARE = 1000;

const OverviewTable = () => {
  return (
    <Card className="mt-5 w-full">
      <CardHeader>
        <CardTitle>Shareholders Table</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="w-full border border-gray-200 table-auto min-w-[600px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">SL</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">No. of Shares</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">No. of Months</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Total Amount</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-700">{index + 1}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{item.name}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{item.shares}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{MONTHS}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{item.shares * PRICE_PER_SHARE * MONTHS} TK</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default OverviewTable;
