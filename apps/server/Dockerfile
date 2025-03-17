FROM golang:1.24-alpine AS builder

RUN apk add --no-cache git

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o /go/bin/app ./cmd/api/main.go

FROM alpine:3.18

WORKDIR /app

COPY --from=builder /go/bin/app .


EXPOSE ${APP_PORT}

CMD ["./app"]