// 100%

package solvings

import (
	"math/rand"
)

type Codec struct {
	urls map[string]string
	dict []rune
}

func Constructor() Codec {
	urls := make(map[string]string)
	dict := []rune{
		'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c',
		'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K',
		'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '1', '2', '3', '4', '5', '6', '7', '8', '9',
	}
	return Codec{urls: urls, dict: dict}
}

// Encodes a URL to a shortened URL.
func (this *Codec) encode(longUrl string) string {
	randStr := this.generateStr()
	this.urls[randStr] = longUrl
	return randStr
}

// Decodes a shortened URL to its original URL.
func (this *Codec) decode(shortUrl string) string {
	return this.urls[shortUrl]
}

func (this *Codec) generateStr() string {
	result := ""
	for {
		for idx := 0; idx < 5; idx++ {
			rndIdx := rand.Intn(len(this.dict))
			result = result + string(rune(this.dict[rndIdx]))
		}

		if this.urls[result] == "" {
			return result
		}
	}
}

/**
* Your Codec object will be instantiated and called as such:
* obj := Constructor();
* url := obj.encode(longUrl);
* ans := obj.decode(url);
 */
