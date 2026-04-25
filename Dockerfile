FROM node:20-alpine AS builder
WORKDIR /build

# Install Babel to compile JSX -> JS
RUN npm init -y && \
    npm install --save-dev @babel/core @babel/cli @babel/preset-react

COPY . .

# Compile each JSX file to plain JS
RUN npx babel tweaks-panel.jsx          -o tweaks-panel.js          --presets @babel/preset-react
RUN npx babel app.jsx                   -o app.js                   --presets @babel/preset-react
RUN npx babel components/isometric.jsx  -o components/isometric.js  --presets @babel/preset-react
RUN npx babel components/dashboard.jsx  -o components/dashboard.js  --presets @babel/preset-react
RUN npx babel components/flow-diagram.jsx -o components/flow-diagram.js --presets @babel/preset-react
RUN npx babel components/sections.jsx   -o components/sections.js   --presets @babel/preset-react

FROM nginx:alpine
COPY --from=builder /build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
