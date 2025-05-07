'use client';

import skillDatas from '@/data/skillDatas.json'

import { useState, useMemo } from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { TableSortLabel } from '@mui/material';
import { Box } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { descriptiveToPathCompatible } from '@/utility/string-manipulation';
import SkillUsageRateIcon from './GaugeIcon';
import { useRouter } from 'next/navigation';

const columns = [
    { id: 'Name', label: 'Name', minWidth: 120, format: (value) => value.toLocaleString('en-US') },
    {
        id: 'Category',
        label: 'Category',
        minWidth: 120,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'UsageRate',
        label: 'UsageRate',
        minWidth: 120,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    }
    // {
    //     id: 'usage in cert',
    //     label: 'Usage in cert',
    //     minWidth: 170,
    //     align: 'right',
    //     format: (value) => value.toFixed(0),
    // },
];

const textColor = 'rgb(194, 221, 252)'
const skills = skillDatas.record

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } = props;

    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return(
        <TableHead>
            <TableRow>
                {columns.map((column) => (
                    <TableCell
                        key={column.id}
                        align={column.align}
                        className='border-sky-500'
                        style={{ minWidth: column.minWidth }}
                        sx={{ 
                            backgroundColor: '#00007d', 
                            color: 'white'
                        }}
                    >
                        <TableSortLabel
                            active={orderBy === column.id}
                            direction={orderBy === column.id ? order : 'asc'}
                            onClick={createSortHandler(column.id)}
                        >
                            {column.label}
                            {orderBy === column.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

export default function SkillTable() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const [orderBy, setOrderBy] = useState('Category');
    const [order, setOrder] = useState('asc');
    const router = useRouter();

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleSkillButtonClick = (skill) => {
        router.push(`/skills/${descriptiveToPathCompatible(skill)}`)
    }

    const visibleRows = useMemo(
        () =>
            [...skills]
            .sort(getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        [order, orderBy, page, rowsPerPage],
    );

    return (
        <Paper sx={{ 
            width: '100%', 
            overflow: 'hidden', 
            marginTop: '96px'
        }}>
            <TableContainer sx={{ maxHeight: 640 }}>
                <Table stickyHeader aria-label="sticky table">
                    <EnhancedTableHead
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                    ></EnhancedTableHead>
                    <TableBody>
                        {visibleRows
                            .map((row) => {
                                return (
                                    <TableRow 
                                        className='border-b-[1px] hover:cursor-pointer bg-slate-900 hover:bg-slate-800'                                        
                                        role="checkbox" 
                                        tabIndex={-1} 
                                        key={row.Name}
                                        onClick={() => handleSkillButtonClick(row.Name)}
                                    >
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    
                                                    <TableCell 
                                                        key={column.id} 
                                                        align={column.align}
                                                        sx={{color: textColor}}
                                                    >
                                                        {column.id !== 'UsageRate'
                                                            ? column.format(value)
                                                            : ''}
                                                        {column.id === 'UsageRate'
                                                            ? <SkillUsageRateIcon rate={value} />
                                                            : ''
                                                        }
                                                    </TableCell>

                                                );
                                            })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={skills.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{ backgroundColor: "rgb(24, 38, 73)", color: textColor}}
            />
        </Paper>
    );
}