package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"time"
)

type URLAndIDs struct {
	URL string `json:"url"`
	IDs []int  `json:"ids"`
}

func fetchURLWithID(url string, id int) (float64, error) {
	fullURL := fmt.Sprintf("%s/%d", url, id)
	start := time.Now()
	resp, err := http.Get(fullURL)
	if err != nil {
		return 0, err
	}
	defer resp.Body.Close()
	if resp.StatusCode == http.StatusOK {
		elapsed := time.Since(start).Seconds() * 1000
		return elapsed, nil
	} else {
		return 0, fmt.Errorf("response status code: %d", resp.StatusCode)
	}
}

func fetchAllURLs(urlsAndIDs []URLAndIDs, numPasses int) {
	for _, urlAndIDs := range urlsAndIDs {
		url := urlAndIDs.URL
		ids := urlAndIDs.IDs
		fmt.Printf("URL: %s\n", url)
		for _, id := range ids {
			fmt.Printf("ID: %d\n", id)
			for passNum := 1; passNum <= numPasses; passNum++ {
				responseTime, err := fetchURLWithID(url, id)
				if err == nil {
					fmt.Printf("Pass %d response time (ms): %.2f\n", passNum, responseTime)
				} else {
					fmt.Printf("Pass %d failed: %s\n", passNum, err)
				}
				time.Sleep(1 * time.Second)
			}
			fmt.Println("")
		}
		fmt.Println("")
	}
}

func main() {
	jsonFile, err := os.Open("input-go-w3.json")
	if err != nil {
		panic(err)
	}
	defer jsonFile.Close()

	var urlsAndIDs []URLAndIDs
	jsonDecoder := json.NewDecoder(jsonFile)
	err = jsonDecoder.Decode(&urlsAndIDs)
	if err != nil {
		panic(err)
	}

	numPasses := 5 // set the number of passes here
	fetchAllURLs(urlsAndIDs, numPasses)
}
