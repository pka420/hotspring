import { IconButton, Paper } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import SortIcon from "@material-ui/icons/ArrowDownward";
import React from "react";
import DataTable from "react-data-table-component";
import MultiSelectPopup from "../../Modals/MultiSelectPopup";

const Linear = () => (
    <div style={{ width: "100%" }}>
        <LinearProgress color="primary" />
    </div>
);

const MyTable = (props) => {

    const [state, setState] = React.useState<{
        noHeader: boolean;
        selectedRows: any[];
        selectedUserName: any[];
        clearSelectedRows: boolean;
        currentRow: any;
    }>({
        noHeader: true,
        selectedRows: [],
        selectedUserName: [],
        clearSelectedRows: false,
        currentRow: null,
    });

    React.useLayoutEffect() => {
        if (props.filterIdentityClass != undefined) {
            var docs_list = document.getElementsByClassName(
                props.filterIdentityClass,
            );
            docs_list = Array.prototype.slice.call(docs_list);
            docs_list.forEach((eachTable, index) => {
                var filter_element = eachTable.getElementsByClassName(
                    "data-table-extensions",
                )[0];
                eachTable.getElementsByClassName("spaceBar")[0].after(filter_element);
                filter_element.className = "data-table-extensions col-4 mt-2";
                eachTable.getElementsByClassName(
                    "data-table-extensions-filter",
                )[0].style.width = "100%";
                eachTable.getElementsByClassName(
                    "data-table-extensions-filter",
                )[0].style.padding = "2px";
            });
        }
    }, [props.filterIdentityClass]);

    const handleSelect = (row: any) => {
        if (row.selectedCount > 1) {
            setState({
                noHeader: false,
                selectedRows: row.selectedRows.map((eachRow) => eachRow.id),
                selectedUserName: row.selectedRows.map((eachRow) => eachRow.username),
            });
        } else {
            setState({ noHeader: true });
        }
    };

    const hideHeader = () => {
        setState({
            noHeader: true,
            clearSelectedRows: !state.clearSelectedRows,
        });
    };

    const contextAction = () => (
        <div>
            <MultiSelectPopup
                title={"Approve Users"}
                bodyIconClass={"fas fa-user-check"}
                action={"approve"}
                multiSelectAction={props.approveUser}
                usersID={state.selectedRows}
                usersName={state.selectedUserName}
                reset={hideHeader}
                approveType={props.approveType}
            />

            <MultiSelectPopup
                title={"Delete Users"}
                multiSelectAction={props.deleteMultiUsers}
                usersID={state.selectedRows}
                reset={hideHeader}
                actionType="delete"
            />
        </div>
    );

    render() {
        const { columns, data, pending } = props;
        const tableData = { columns, data };

        return (
            <div className="main">
                <Paper className={`tablePaper ${props.filterIdentityClass}`}>
                    <Container fluid>
                        <Row className="filterBar" noGutters>
                            <Col className="spaceBar" xs={6}></Col>
                            <Col className="data-table-extensions-action ml-2 pt-1 pb-1">
                                {props.filterAction}
                            </Col>
                        </Row>
                    </Container>

                        <DataTable
                            responsive
                            columns={columns}
                            conditionalRowStyles={props.conditionalRowStyles}
                            data={data}
                            noHeader={props.noHeader
                                ? props.noHeader
                                : state.noHeader}
                            noTableHead={props.noTableHead}
                            striped={props.striped}
                            sortIcon={<SortIcon />}
                            defaultSortAsc={true}
                            progressPending={pending}
                            progressComponent={<Linear />}
                            persistTableHead
                            pagination={props.pagination == false
                                ? props.pagination
                                : true}
                            highlightOnHover
                            dense
                            paginationPerPage={props.number ? this.props.number : 10}
                            paginationRowsPerPageOptions={props.number < 10
                                ? [props.number, 10, 20, 50]
                                : [10, 20, 50]}
                            selectableRows={props.selectAble}
                            onSelectedRowsChange={props.handleSelect
                                ? props.handleSelect
                                : handleSelect}
                            clearSelectedRows={props.clearSelectedRows}
                            contextActions={contextAction()}
                            expandableRows={props.expandableRows}
                            expandableRowsComponent={props.expandableRowsComponent}
                            expandOnRowDoubleClicked={props.expandOnRowDoubleClicked
                                ? props.expandOnRowDoubleClicked
                                : false}
                            onRowExpandToggled={(expanded, row) => {
                                setState({ currentRow: row });
                            }}
                            expandableRowExpanded={props.autoCollapse
                                ? (row) => row === state.currentRow
                                : () => { }}
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
                            noDataComponent={props.noDataMessage}
                            contextMessage={{
                                singular: "user",
                                plural: "users",
                                message: "selected",
                            }}
                            paginationServer={props.count !== undefined}
                            paginationTotalRows={props.count}
                            onChangePage={(page, _) => {
                                if (props.handleChangePage) {
                                    props.handleChangePage(page - 1);
                                }
                            }}
                            onChangeRowsPerPage={(newRowsPerPage) => {
                                if (props.handleChangeRowsPerPage) {
                                    props.handleChangeRowsPerPage(newRowsPerPage);
                                }
                            }}
                        />
                </Paper>
            </div>
        );
    }
}

export default MyTable;
