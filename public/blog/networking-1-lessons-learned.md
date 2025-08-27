---
title: Networking 1 - Lessons Learned
cover: networking-1-lessons-learned.jpg
subtitle: Problems I faced while setting up IP Passthrough for my local network and how I solved them.
date: 2025-08-27T00:00:00-05:00
tags:
  - networking
---

# Breaking the Network :satellite:

I've been getting interested in setting up a homelab. The first thing I had to do is set up my own personal router since I have the unfortunate burden of the all-in-one AT&T Gateway.

Since the gateway gives you little control over configuration, I purchased my own [UniFi Dream Router 7](https://store.ui.com/us/en/products/udr7). The UDR7 is a great all-in-one switch, firewall, and router for beginner setups like I am going for.

Once the device arrived, I began troubleshooting the network to enable **IP Passthrough**. At this point, I realized I was going to have to revisit the fundamental concepts of networking (Good thing I kept all my College networking course notes!).

I spent a day reviewing fundamental concepts: **LAN, WAN, DHCP, DNS, Public/Private IPs, Subnets, default gateways** (Oh my! 😮)

After refreshing the basics, I began the configuration changes. Everything was going well until I started changing the LAN IP and DHCP assignment range on the AT&T Gateway. For security purposes, I assigned the DHCP range on the AT&T gateway to only two possible IPs. This would prevent anyone from connecting to the internet if they accidentally connected to the gateway, since my intent with all this was to turn the device into a dummy passthrough.

I was unable to reach the gateway's configuration screen from a browser on my laptop connected through Ethernet (typically by hitting `182.168.1.1` in the browser). I figured there was some issue with IP assignment since I restricted the assignable DHCP range to only two values 😓. Something must have grabbed the two IPs before my laptop could get registered on the same subnet.

After some more troubleshooting, research, and banging my head against the wall, I was able to figure out what was going on. Here are the details and what I learned from this experience ⬇️⬇️⬇️

## Problem Setup

- Made DHCP Range on AT&T Gateway `192.168.10.1 - 192.168.10.2`
- Made Gateway Lan IP `192.168.10.254`
- Tried to connect to gateway through ethernet connection on laptop
- Running `ipconfig` on laptop: saw that laptop was assigned an **Automatic Private IP Address** at `169.254.0.0`
- Internet worked, but was unable to connect to gateway at `192.168.10.254`

## Diagnosis

- Other devices on LAN had already taken the two possible IPs assigned by DHCP.
- This caused my laptop to receive an APIPA.
- Internet still worked, but couldn't connect to gateway, because laptop had a completely different network at this point (`169.254.x.x` vs `192.168.10.x`)
- Because of the different subnets, gateway did not allow navigation to the configuration panel.

## Solution

- Assign laptop a **static IP** for within gateway's network IP range (`192.168.10.x`) **BUT NOT** in the DHCP range.
- Because these static IPs have the same network IP, they are able to access the gateway, even if they weren't assigned out by DHCP.
- This allowed me to connect to the gateway appropriately 👏

Overall, this was an excellent exercise in testing my network fundamentals. I had to revisit concepts I hadn't thought about in years, and it was a great refresher. There will be more networking articles to come as I expand the homelab further! 🚀
