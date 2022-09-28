import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import DataTable from "../../components/DataTable";
import DailyDataLayout from "../../components/layouts/DailyDataLayout";

const DailyTableView = () => {

    const { getTableDataByDay, workedDays } = useOutletContext();
    const [selectedDay, setSelectedDay] = useState(workedDays[0]);

    return (
        <div className="view">
            <DailyDataLayout
                icon="table"
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                options={workedDays}
                component={DailyTableView}
            >
                <DataTable
                    data={[getTableDataByDay(selectedDay)]}
                />
            </DailyDataLayout>
        </div>
    )
}

export default DailyTableView;