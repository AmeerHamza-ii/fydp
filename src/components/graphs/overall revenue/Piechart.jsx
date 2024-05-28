import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function RevenuePieChart() {
  return (
    <PieChart    
      series={[
        {
             data : [
                { id:0, value: 28, label:'Jan' },
                { id:1, value: 21, label:'Feb' },
                { id:2, value: 56, label:'Mar' },
                { id:3, value: 43, label:'Apr' },
                { id:4, value: 32, label:'May' },
                { id:5, value: 33, label:'Jun' },
                { id:6, value: 44, label:'Jul' },
                { id:7, value: 55, label:'Aug' },
                { id:8, value: 66, label:'Sep' },
                { id:9, value: 77, label:'Oct' },
                { id:10, value: 88, label:'Nov' },
                { id:11, value: 54, label:'Dec' },
              ]
        },
      ]}
      width={400}
      height={400}
    />
  );
}