package solvings

import "sort"

func diagonalSort(mat [][]int) [][]int {
    rows := len(mat)
    cols := len(mat[0])
    
    diagonals := make(map[int][]int)
    
    for row := 0; row < rows; row++ {
        for col := 0; col < cols; col++ {
            diagonals[row-col] = append(diagonals[row-col], mat[row][col])
        }
    }
    
    for _, d := range diagonals {
        sort.Ints(d)
    }
    
    for row := 0; row < rows; row++ {
        for col := 0; col < cols; col++ {
            mat[row][col] = diagonals[row-col][0]
            diagonals[row-col] = diagonals[row-col][1:]
        }
    }
    
    return mat
}
