import OverviewTable from '@/components/custom/Overview/OverviewTable';
import PageHeader from '@/components/custom/PageHeader';
import React from 'react';

const page = () => {
  return (
    <div>
      <PageHeader title="অগ্রযাত্রা - Overview" />
      <OverviewTable/>
    </div>
  );
};

export default page;