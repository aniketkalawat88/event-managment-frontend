"use client";

import Link from "next/link";
import React from "react";
import EventTable from "../../_components/event-table";
import AdminLayout from "../../_components/admin-layout";

export default function Admin() {
  return (
    <AdminLayout>
      <div className="min-h-[80vh] p-6">
        <div className="md:flex justify-between items-start md:pr-20 my-5">
          <h1 className="text-2xl font-bold mb-4 text-primary-main">
            Welcome Admin <br /> Here List of all Events
          </h1>
          <Link
            href={"/admin/create"}
            className="bg-primary-main text-white p-3 rounded-lg px-10"
          >
            Add Events
          </Link>
        </div>
        <EventTable />
      </div>
    </AdminLayout>
  );
}
