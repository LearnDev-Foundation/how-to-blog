How Does the Internet Work?
---------------------------
---------------------------

Although we use it in our everyday lives, what the internet really is and how it works remains a mystery many do not intend to unravel. However, in your journey to becoming a web developer, you must have a high-level understanding of how your browser and the internet interact to serve your web pages to your users. This will enable you to make better decisions regarding performance, cookies, and code complexity when you start writing code for the browser.

In this blog, you will learn about the fundamentals of the internet and how they work together to enable you to use your favorite apps and websites.

What is the Internet?
---------------------

Simply put, the internet is a global network of computers. This network consists of computers of all sizes, laptops, smartphones, and other devices that can communicate with one another, thereby enabling the sharing of information through texts, documents, photos, videos, and other files. The internet allows for smooth communication between different localized computer networks, which combine to make up a giant network of billions of interconnected computers worldwide. This communication between computers and the ability to share files enables various online services like e-mail, e-commerce, and every other service available on the internet today.

Major Components of the Internet
--------------------------------

You will encounter several technical terms when interacting with the internet throughout your web development journey. The following are the basic vocabulary and components that enable connection through the internet:

- **The Internet Backbone:** An essential component of the internet is a network of cables connected across countries and continents. The backbone of the internet is a series of networks that allow computers to communicate with each other. These networks comprise many different types of equipment, including routers, switches, and computers. Each computer or router connected to the internet is called a node.

- **Network:** A network is a group of interconnected computers. Computers in the same network can communicate with one another. The network has different layers: application, transport, and network. These layers include protocols such as TCP, UDP, HTTP, and SMTP that define how data is sent over the web. Computer networks can be public or private. Private networks of computers called intranets are often used to safely pass information within an organization.

- **Router:** A router is a device that allows one computer to connect with many other computers without linking to it physically. Connecting every computer in the world to one another through cables is unrealistic. Routers help solve this problem by providing a one-to-many connection to computers. The internet is a result of many such router-to-router and router-to-computer connections.

- **Client:** A computer (node) that sends requests for a file on the internet is referred to as the client.

- **Server:** A server is a computer on the internet tasked with 24/7 availability to receive and send back results to client computers. It interprets and responds to requests sent by client nodes.

- **Internet Service Provider(ISP):** Internet service providers are vital enablers of the internet. They install communication cables that form a part of the internet backbone. When your browser sends a request to visit a website, the ISP serves as the intermediary to help the client node relay, resolve, request, and receive files on the internet. An example is MTN in Africa, AT&T in the US, or Vodafone in the UK.

- **Domain Name System(DNS) Server:** A DNS is basically a phone book that stores the URL of a website against its IP address. The DNS server's job is to resolve the URL it receives and send the equivalent IP address as a response. This process is called DNS resolution.

- **Internet Protocol(IP) Address:** An IP address is a unique set of numbers that identifies a computer on the internet or local network. 216.239.32.0 is an example of an IP address.

- **Uniform Resource Locator(URL):** URL is a standardized string that contains the unique address and protocol to access a file over a network. For example, https://www.google.com. The *https://* part of the URL defines the protocol for the browser to access the website. The *www* part is the subdomain. And *google.com* is the domain name.

- **Domain Name:** A domain name is a website address that users type in their browser to visit the webpage. It is a human-readable format of an IP address. Google.com, for example.

- **Protocol:** A protocol defines a set of rules and syntax on how data should be transmitted over a network. There are different types of file transfer protocols, including Hypertext Transfer Protocol (HTTP), Secure Hypertext Transfer Protocol (HTTPS), File Transfer Protocol (FTP), and Simple Mail Transfer Protocol (SMTP). The Transmission Control Protocol (TCP) is also a type of protocol that is associated with the transport layer of the internet network.

- **Packets:** Packets are like little envelopes that contain the data being sent. Packets are small units of data transmitted across a network. Files on the internet are broken down and transmitted in packets, each containing relevant data called headers that ensure that a node can reassemble them to become whole when they reach their destination.

How Does the Internet Work?
---------------------------

Now that we know some of the internet's significant components, let's understand how all of them work together when you try visiting a website.

Suppose you connect to the internet via a wireless router; the following is what happens when you enter a URL in your browser:

**Step 1:** Type in a web address (URL) in the browser on your computer. For example, https://www.google.com.

**Step 2:** The browser sends this URL to your internet service provider (ISP), which then forwards it to a DNS server.

**Step 3:** The DNS server resolves the URL and finds the IP address that is associated with it. For example, the https://www.google.com URL is related to a server with the IP address: 216.239.32.0.

**Step 4:** The DNS server then sends the IP address as a response through the ISP back to your computer. Knowing the actual IP address, your browser can quickly locate the computer at that address on the internet.

**Step 5:** Your browser sends a secure Hypertext Transfer Protocol (HTTPS) request to the target server located at the IP address through the ISP, telling the server to send a copy of the requested files to the client using TCP/IP.

**Step 6:** Once the server is located, it receives and resolves your request. The server approves the request and sends a "200 OK" message to your computer.

It then sends the requested files, such as HTML, CSS, and JavaScript files, back to the browser as data packets.

**Step 7:** The browser receives the data packets and reassembles them. The browser then interprets the files and displays the webpage.

**Step 8:** View and interact with your webpage!

The entire process appears to be lengthy. However, in practice, everything occurs in a matter of milliseconds, thanks to advancements in internet connection technology.

Summary
-------

In today's world, the internet is a necessary component of daily life. As a web developer who will be designing and developing solutions that will be accessed over the internet, it is essential to understand how it works. This article introduces you to the fascinating specifics of this vast global network by explaining what the internet is and how it functions.
