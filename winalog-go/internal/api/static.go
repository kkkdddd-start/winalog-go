package api

import (
	"embed"
	"io/fs"
	"net/http"
	"strings"
)

//go:embed _statich
var staticFiles embed.FS

func getStaticFS() http.FileSystem {
	subFS, err := fs.Sub(staticFiles, "_statich")
	if err != nil {
		panic("failed to get static sub filesystem: " + err.Error())
	}
	return http.FS(subFS)
}

func getStaticFilePath(path string) string {
	path = strings.TrimPrefix(path, "/")
	if path == "" {
		path = "index.html"
	}
	return path
}
