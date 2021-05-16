import "strings"

func defangIPaddr(address string) string {
    b := strings.Builder{}
    
    b.Grow(len(address) + 6)
    
    for _, item := range address {
        if item == '.' {
            b.WriteString("[.]")
            continue
        }
        
        b.WriteRune(item)
    }
    
    return b.String()
}
