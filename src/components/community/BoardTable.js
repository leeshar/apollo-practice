import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});
let id = 0;
function createData(bno, nick_name, title, content, read_cnt, date) {
  id += 1;
  return { id, nick_name, bno, title, content, read_cnt, date };
}

const rows = [
  createData(
    1,
    "하와이",
    "이런 책 구해요",
    "이런 책 내용은 이렇습니다.",
    1,
    "2019-03-22"
  ),
  createData(2, "ㅇㅇ", "여런 책 구해요", "안녕하세욯ㅎㅎ", 1, "2019-03-22"),
  createData(
    3,
    "12121",
    "이런 책 있나요?",
    "이런 책 있으시면 저한테 연락주세요!",
    0,
    "2019-03-22"
  ),
  createData(
    4,
    "솔로",
    "책 추천 받아요",
    "제가 프로그래밍 공부를 하려는데 추천 좀 해주세요",
    0,
    "2019-03-22"
  ),
  createData(
    5,
    "제니",
    "새로 나온 책입니다.",
    "재밌습니다. 한번 읽어보세요!",
    0,
    "2019-03-22"
  )
];

function BoardTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>글번호</TableCell>
            <TableCell align="right">닉네임</TableCell>
            <TableCell align="right">제목</TableCell>
            <TableCell align="right">내용</TableCell>
            <TableCell align="right">조회수</TableCell>
            <TableCell align="right">날짜</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.bno}
              </TableCell>
              <TableCell align="right">{row.nick_name}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.content}</TableCell>
              <TableCell align="right">{row.read_cnt}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(BoardTable);
