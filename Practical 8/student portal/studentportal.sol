// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract studentMarks {

    struct std{
        uint sid;
        string sname;
        address add;
        uint[3] marks;
        uint BT;
        uint ML;
        uint BD;
        string grade;
    }

    mapping (uint256 => std) public s1;

    function Resgistration(uint i, string memory n) public {
        s1[i].sname = n;
        s1[i].add = msg.sender;
        s1[i].sid = i;
    }

    function SMarks(uint id, uint b, uint m, uint d) public {
        s1[id].BT = b;
        s1[id].ML = m;
        s1[id].BD = d;
        s1[id].grade = CSM(id);
    }

    function CSM(uint id) internal view returns (string memory) {
        std storage student = s1[id];
        uint256 totalMarks = student.BT + student.ML + student.BD;
        uint256 percentage = (totalMarks * 100) / 300;

        if (percentage >= 90) {
            return "A+";
        } else if (percentage >= 80) {
            return "A";
        } else if (percentage >= 70) {
            return "B+";
        } else if (percentage >= 60) {
            return "B";
        } else if (percentage >= 50) {
            return "C";
        } else if (percentage >= 40) {
            return "D";
        }
        else {
            return "F";
        }


    }


    function display (uint256 id) external view  returns (std memory) {
        return s1[id];
    }
}