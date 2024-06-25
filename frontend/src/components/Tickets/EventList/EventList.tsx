import React from "react";
import DataTable, { createTheme } from "react-data-table-component";
import classes from "./EventList.module.css";
import { Box, Typography } from "@mui/material";
import { formatDate } from "../../Utils/utils";
import SortIcon from "@mui/icons-material/ArrowDownward";
import EventDetails from "../EventDetails/EventDetails";
import IconButton from "@mui/material/IconButton";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";

createTheme("solarized", {
    text: {
        primary: "#268bd2",
        secondary: "#2aa198",
    },
    background: {
        default: "#002b36",
    },
    context: {
        background: "#cb4b16",
        text: "#FFFFFF",
    },
    divider: {
        default: "#073642",
    },
    action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
    },
}, "dark");

interface TableColumn<T> {
    name: any;
    selector: (row: T) => any;
    sortable: boolean;
    cell?: (row: T) => any;
}

interface EventListProps {
    data: any;
    title: string;
    fetchEvents: () => void;
}

const EventList: React.FC<EventListProps> = ({ data, title, fetchEvents }) => {
    const columns: TableColumn<any>[] = [
        {
            name: <Typography variant="h6">Date/Time</Typography>,
            selector: (row: any) => row.dates.start.dateTime,
            sortable: true,
            cell: (row: any) => (
                <Typography variant="body2">
                    {formatDate(row.dates.start.dateTime)}
                </Typography>
            ),
        },
        {
            name: <Typography variant="h6">Icon</Typography>,
            selector: (row: any) => row.images[0].url,
            sortable: false,
            cell: (row: any) => (
                <img
                    className={classes.iconImage}
                    src={row.images[0].url}
                    alt="icon"
                />
            ),
        },
        {
            name: <Typography variant="h6">Event</Typography>,
            selector: (row: any) => row.name,
            sortable: true,
            cell: (row: any) => (
                <Typography variant="body2">{row.name}</Typography>
            ),
        },
        {
            name: <Typography variant="h6">Genre</Typography>,
            selector: (row: any) => row.classifications[0].genre.name,
            sortable: true,
            cell: (row: any) => (
                <Typography variant="body2">
                    {row.classifications[0].genre.name}
                </Typography>
            ),
        },
        {
            name: <Typography variant="h6">Venue</Typography>,
            selector: (row: any) => row._embedded.venues[0].name,
            sortable: true,
            cell: (row: any) => (
                <Typography variant="body2">
                    {row._embedded.venues[0].name}
                </Typography>
            ),
        },
    ];

    const [row, setRow] = React.useState<any>(null);

    return (
        <>
            <Box p={10}>
                <DataTable
                    title={<Typography variant="h4">Events</Typography>}
                    columns={columns}
                    data={data._embedded.events}
                    pagination
                    highlightOnHover
                    sortIcon={<SortIcon />}
                    expandableRows={true}
                    expandableRowsComponent={({ data }) => (
                        <EventDetails data={data} fetchEvents={fetchEvents} />
                    )}
                    onRowExpandToggled={(expanded, row) => {
                        setRow(expanded ? row : null);
                    }}
                    expandableRowExpanded={(newRow) => newRow === row}
                    expandableIcon={{
                        collapsed: (
                            <IconButton size="small">
                                <ExpandMore />
                            </IconButton>
                        ),
                        expanded: (
                            <IconButton size="small">
                                <ExpandLess />
                            </IconButton>
                        ),
                    }}
                />
            </Box>
        </>
    );
};

export default EventList;
