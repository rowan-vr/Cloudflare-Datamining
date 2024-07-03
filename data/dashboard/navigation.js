const navigation = {
	root: [{
		title: "navigation.root.organizations",
		url: "/organizations",
		labels: ["new"],
		iconType: "cloud-multi",
		hasPermission: z => !!(0, e.z1)("control-plane-large-orgs")(z)
	}, {
		title: "navigation.root.accounts",
		url: "/",
		iconType: "cloud-internet"
	}, {
		title: "navigation.root.websites",
		url: "/zones",
		iconType: "internet-browser"
	}, {
		title: "navigation.root.profile",
		url: "/profile",
		iconType: "user-outline"
	}, {
		title: "navigation.root.partners",
		url: "/partners/tenant",
		iconType: "carbon",
		hasPermission: z => (0, e.z1)(v.Mr)(z) && (0, F.z7)(z) && !!(0, F.z$)(z).length
	}],
	partners: [{
		title: "navigation.partners.tenant",
		url: "/partners/tenant",
		iconType: "cloudflare-magic-wan"
	}, {
		title: "navigation.partners.accounts",
		url: "/partners/account",
		iconType: "user-multi"
	}],
	profile: [{
		title: "navigation.profile.preferences",
		url: "/",
		iconType: "edit"
	}, {
		title: "navigation.profile.access_management",
		url: "/access-management",
		iconType: "lock",
		hasPermission: z => !!(0, e.z1)("oauth-access-management")(z)
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: z => !(0, i.n3)() && !(0, e.z1)("oauth-access-management")(z)
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: z => !(0, e.z1)("oauth-access-management")(z)
	}],
	account: [{
		title: "navigation.account.home",
		url: "/",
		iconType: "home",
		labels: ["beta"],
		hasPermission: z => !!(0, e.z1)("dash-account-home-v2")(z)
	}, {
		title: "navigation.root.websites",
		url: "/websites",
		iconType: "internet-browser"
	}, {
		title: "navigation.account.discover",
		url: "/discover",
		iconType: "discover"
	}, {
		title: "navigation.account.registrar",
		url: "/domains",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: z => (0, o.YV)(z)
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			hasPermission: z => (0, o.YV)(z)
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			labels: ["beta"],
			hasPermission: z => (0, o.gw)(z)
		}]
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		iconType: "chart",
		pages: [{
			title: "navigation.account.account_analytics",
			url: "/analytics",
			labels: ["beta"],
			hasPermission: z => (0, o.iY)(z)
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics/all-traffic",
			hasPermission: z => (0, o.iY)(z) && (0, x.Ob)(z)
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: z => (0, o.iY)(z)
		}, {
			title: "navigation.account.logs",
			url: "/logs",
			hasPermission: z => (0, o.iY)(z) && (0, m.S6)(z) && !!(0, e.z1)("account-logpush")(z)
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: z => (0, o.iY)(z) && !!(0, a.Le)(z, "account_analytics", "carbon_dashboard")
		}, {
			title: "navigation.account.magic.network_monitoring",
			url: "/network-monitoring",
			hasPermission: z => (0, o.iY)(z) && (!!(0, a.Le)(z, "account_analytics", "magic_network_monitoring") || !!(0, s.$f)(z, "rulesets.magic_transit_allowed"))
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: z => (0, o.iY)(z) && (0, l.xU)(z),
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: z => (0, o.iY)(z) && (0, l.sL)(z)
		}, {
			title: "navigation.account.security_center.security_analytics",
			url: "/security-center/analytics",
			hasPermission: z => (0, o.iY)(z) && (0, l.B_)(z)
		}, {
			title: "navigation.account.security_center.security_events",
			url: "/security-center/events",
			labels: ["beta"],
			hasPermission: z => (0, o.iY)(z) && (0, l.B_)(z)
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: z => (0, o.iY)(z) && (0, l.sL)(z)
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: z => (0, o.iY)(z) && (0, l.TT)(z)
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			labels: ["beta"],
			hasPermission: z => (0, o.iY)(z) && (0, l.jD)(z)
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			labels: ["beta"],
			hasPermission: z => (0, o.iY)(z) && (0, l.BU)(z)
		}, {
			title: "navigation.account.security_center.cfone_priorities",
			url: "/cloudforce-one/priorities",
			hasPermission: z => (0, o.iY)(z) && (0, l.fs)(z)
		}, {
			title: "navigation.account.security_center.cfone_reports",
			url: "/cloudforce-one/reports",
			hasPermission: z => (0, o.iY)(z) && (0, l.Bc)(z)
		}, {
			title: "navigation.account.security_center.cfone_requests",
			url: "/cloudforce-one/requests",
			hasPermission: z => (0, o.iY)(z) && (0, l.gA)(z)
		}]
	}, {
		title: "navigation.account.request_tracer",
		url: "/trace",
		iconType: "trace",
		testId: "trace-link",
		labels: ["beta"],
		hasPermission: R.T
	}, {
		title: "navigation.account.group_title.application_services",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.waf",
		url: "/application-security/waf",
		iconType: "cloudflare-security-application",
		tabs: T.DW
	}, {
		title: "navigation.account.dns_firewall",
		url: "/dns-firewall",
		iconType: "reliability-dns",
		testId: "sidenav-dns_firewall-link",
		hasPermission: z => (0, s.Ci)(z)
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		hasPermission: z => (0, o.iY)(z) && !!(0, e.z1)("managed-challenge-ui")(z)
	}, {
		title: "navigation.account.group_title.network_services",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.interconnects",
		url: "/interconnects",
		iconType: "cloudflare-magic-wan",
		hasPermission: z => !!((0, o.iY)(z) && (0, e.z1)("magic-interconnects")(z) && (!!(0, a.Le)(z, "magic_wan", "mw_home") || !!(0, a.Le)(z, "magic_transit", "mt_home")))
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: z => (0, o.iY)(z) && !!(0, a.Le)(z, "magic_transit", "mt_home"),
		pages: [{
			title: "navigation.account.magic_connectors.configuration",
			url: "/magic-transit/configuration",
			tabs: O.Lx.concat(O.SF, O.Jg)
		}, {
			title: "navigation.account.magic.tunnel_healthcheck",
			url: "/magic-transit/tunnel-healthchecks"
		}, {
			title: "account.magic.packet_captures.menu",
			url: "/magic-transit/packet-captures/captures"
		}]
	}, {
		title: "navigation.account.magic_firewall",
		url: "/network-security/magic_firewall",
		iconType: "magic-firewall",
		hasPermission: z => !!(0, o.zJ)(z),
		tabs: T.$$
	}, {
		title: "navigation.account.l3l4.ddos",
		url: "/network-security/ddos",
		iconType: "cloudflare-security-network",
		hasPermission: z => {
			const ge = !!(0, o.Wq)(z) && !!(0, o.fO)(z);
			return !!(0, o.Tk)(z) || ge
		},
		tabs: T.Dn,
		pages: [{
			title: "navigation.account.l3l4.ddos.ddos_managed_rules",
			url: "/network-security/ddos",
			hasPermission: z => {
				const ge = !!(0, o.Wq)(z) && !!(0, o.fO)(z);
				return (0, ee.EL)(z) && ge
			}
		}, {
			title: "navigation.account.l3l4.ddos.ddos_protection",
			url: "/network-security/ddos-protection/settings",
			hasPermission: z => (0, ee.EL)(z) && (0, o.Tk)(z)
		}]
	}, {
		title: "navigation.account.ip_addresses",
		url: "/ip-addresses/ip-prefixes",
		iconType: "network",
		pages: [{
			title: "navigation.account.ip_addresses.ip_prefixes",
			url: "/ip-addresses/ip-prefixes",
			hasPermission: z => (0, o.iY)(z) && !!(0, a.Le)(z, "addressing", "ip_prefixes")
		}, {
			title: "navigation.account.ip_addresses.proxy-ips",
			url: "/ip-addresses/proxy-ips",
			hasPermission: z => (0, o.iY)(z) && !!(0, e.z1)("proxy-ips-ui")(z)
		}],
		hasPermission: z => (0, o.iY)(z) && !!(0, a.Le)(z, "addressing", "ip_prefixes")
	}, {
		title: "navigation.account.group_title.cloudflare_one",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.zero_trust",
		url: () => {
			const z = (0, r.e1)(),
				ge = "https://one.dash.cloudflare.com";
			return z ? `${ge}/${z}/` : ge
		},
		iconType: "cloudflare-zero-trust",
		labels: z => (0, e.z1)("zt-sidebar")(z) ? [] : ["external-link"],
		hasPermission: z => (0, o.iY)(z)
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		hasPermission: z => (0, o.iY)(z) && !!(0, a.Le)(z, "magic_wan", "mw_home") || !!(0, a.Le)(z, "magic_wan", "mc_home"),
		pages: [{
			title: "navigation.account.magic_connectors.overview",
			url: "/magic-wan/overview",
			hasPermission: z => (0, o.iY)(z) && !!(0, a.Le)(z, "magic_wan", "mc_home")
		}, {
			title: "navigation.account.magic_connectors.sites",
			url: "/magic-wan/sites",
			hasPermission: z => (0, o.iY)(z) && !!(0, a.Le)(z, "magic_wan", "mc_home")
		}, {
			title: "navigation.account.magic_connectors.cloud_connectors",
			url: "/magic-wan/cloud",
			labels: ["beta"],
			hasPermission: z => !!(0, s.$f)(z, "magic_cloud.enabled")
		}, {
			title: "navigation.account.magic_connectors.configuration",
			url: "/magic-wan/configuration",
			tabs: O.SF.concat(O.Jg)
		}, {
			title: "navigation.account.magic.tunnel_healthcheck",
			url: "/magic-wan/tunnel-healthchecks"
		}, {
			title: "account.magic.packet_captures.menu",
			url: "/magic-wan/packet-captures/captures"
		}]
	}, {
		hasPermission: z => (0, o.iY)(z),
		iconType: "email-forwarding",
		title: "navigation.account.area_one",
		url: "/area1",
		pages: [{
			title: "navigation.common.overview",
			url: "/area1"
		}, {
			title: "navigation.account.area_one.retro_scan",
			url: "/area1/retro-scan",
			hasPermission: z => (0, e.z1)("area-1-retro-scan")(z) === !0
		}, {
			title: "navigation.account.area_one.dashboard",
			url: "https://horizon.area1security.com/api/cf-auth/login",
			labels: ["external-link"]
		}]
	}, {
		title: "navigation.account.group_title.developer_platform",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.workers_and_pages",
		url: "/workers-and-pages",
		additionalMatchUrls: ["/workers", "/pages"],
		iconType: "workers-pages",
		hasPermission: z => (0, o.iY)(z),
		testId: "sidenav-workers-pages-link",
		pages: [{
			title: "navigation.common.overview",
			url: "/workers-and-pages"
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.durable_objects",
			url: "/workers/durable-objects",
			hasPermission: z => !!(0, e.z1)("durable-objects-ui")(z)
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: ["beta"],
			hasPermission: z => !!(0, e.z1)("queues-ui")(z),
			testId: "sidenav-queues-link"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1"
		}, {
			title: "navigation.account.workers.constellation",
			url: "/workers/constellation",
			labels: ["beta"],
			hasPermission: z => !!(0, e.z1)("constellation-ui")(z) && !(0, a.RO)(z)
		}, {
			title: "navigation.account.workers.hyperdrive",
			url: "/workers/hyperdrive",
			hasPermission: z => !!(0, e.z1)("hyperdrive-ui")(z)
		}, {
			title: "navigation.account.workers.browser_rendering",
			url: "/workers/browser-rendering",
			hasPermission: z => !!(0, e.z1)("browser-rendering-ui")(z) && (!!(0, a.Le)(z, "workers", "browser_bindings") || !!(0, s.$f)(z, "workers.enabled"))
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: z => {
				const ge = (0, c.tJ)(z);
				return !(0, A.ky)(ge, [f.uD.EnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: z => (0, o.iY)(z) && (0, K.k)(z)
	}, {
		title: "navigation.account.workers.ai",
		url: "/ai/workers-ai",
		iconType: "workers-constellation",
		hasPermission: z => !!(0, a.RO)(z) || !!(0, a.B)(z),
		testId: "sidenav-ai-link",
		pages: [{
			title: "navigation.account.workers.ai.workers-ai",
			url: "/ai/workers-ai",
			testId: "sidenav-ai-workers-link",
			hasPermission: z => (0, a.RO)(z)
		}, {
			title: "navigation.account.workers.ai.vectorize",
			url: "/ai/vectorize",
			labels: ["beta"],
			testId: "sidenav-ai-vectorize-link",
			hasPermission: z => (0, a.RO)(z) && !!(0, s.BF)(z, "vector_db.enabled")
		}, {
			title: "navigation.account.workers.ai.ai-gateway",
			url: "/ai/ai-gateway",
			testId: "sidenav-ai-gateway-link",
			hasPermission: z => !!(0, a.B)(z)
		}]
	}, {
		title: "navigation.account.r2",
		url: "/r2/overview",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: z => (0, o.iY)(z),
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: z => (0, o.o_)(z)
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			testId: "sidenav-r2Migrator-link",
			hasPermission: z => (0, o.o_)(z)
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: z => (0, o.iY)(z),
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: z => (0, o.hv)(z)
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: z => (0, o.hv)(z)
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: z => (0, o.hv)(z)
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		testId: "sidenav-images-link",
		hasPermission: z => (0, o.iY)(z),
		pages: [{
			title: "navigation.account.images.overview",
			url: "/images/images",
			hasPermission: z => (0, o.IU)(z)
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: z => (0, o.IU)(z)
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: z => (0, o.IU)(z)
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			testId: "sidenav-sourcingkit-link",
			hasPermission: z => (0, o.IU)(z),
			labels: ["beta"]
		}, {
			title: "navigation.account.images.delivery_zones",
			url: "/images/delivery-zones",
			testId: "sidenav-delivery-zones-link",
			labels: ["new"]
		}]
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "calls",
		hasPermission: z => (0, o.iY)(z)
	}, {
		title: "navigation.account.group_title.account_management",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.manage_account",
		url: "/members",
		iconType: "gear",
		testId: "manage-account-link",
		pages: [{
			title: "navigation.account.members",
			url: "/members",
			testId: "account-homepage-members",
			hasPermission: z => (0, o.iY)(z)
		}, {
			title: "navigation.account.api_tokens",
			url: "/api-tokens",
			testId: "account-homepage-api-tokens",
			hasPermission: z => (0, o.iY)(z) && !!(0, e.z1)("account-owned-api-tokens")(z)
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: z => (0, M.b)(z) ? (0, o.iY)(z) : (0, a.Yj)(z)("auditlogs").read
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: z => (0, o.iY)(z)
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: z => (0, o.iY)(z)
		}, {
			title: "navigation.account.mcn",
			url: "/mcn",
			labels: ["beta"],
			hasPermission: z => !!((0, o.iY)(z) && !!(0, s.$f)(z, "magic_cloud.enabled")),
			testId: "sidenav-mcn-pages-link"
		}]
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: z => (0, o.iY)(z)
	}, {
		title: "navigation.account.account_inbox",
		url: "/account-inbox",
		iconType: "inbox",
		hasPermission: z => (0, o.iY)(z) && !!(0, e.z1)("dx-message-inbox")(z),
		testId: "sidenav-account-inbox-link"
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		hasPermission: z => (0, o.iY)(z)
	}],
	zone: [{
		title: "navigation.common.overview",
		url: "/",
		iconType: "clipboard",
		testId: "zone-navigation-link-overview",
		navigationType: "global-settings"
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		iconType: "chart",
		testId: "zone-navigation-link-analytics",
		navigationType: "version",
		hasPermission: z => (0, o.$n)(z, "analytics", "analytics"),
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			navigationType: "version",
			hasPermission: z => !(0, s.yD)(z)
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			navigationType: "global-settings",
			hasPermission: z => !(0, s.yD)(z)
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			navigationType: "global-settings",
			hasPermission: z => !(0, s.yD)(z)
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			navigationType: "global-settings",
			hasPermission: z => {
				const ge = (0, p.nA)(z);
				return ge ? !!(!(0, s.yD)(z) && !!(0, p.ZB)(z, "origin_reachability_dash", "dash_view") && (0, p.tU)(ge, "enterprise") && !!(0, u.Ek)(z, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			navigationType: "global-settings",
			hasPermission: z => {
				const ge = (0, p.nA)(z);
				return ge ? !!(!(0, s.yD)(z) && !!(0, p.ZB)(z, "edge_reachability_dash", "dash_view") && (0, p.tU)(ge, "enterprise") && !!(0, u.Ek)(z, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			navigationType: "global-settings",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			navigationType: "global-settings",
			hasPermission: z => !(0, s.yD)(z)
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			navigationType: "both",
			hasPermission: z => (0, m.Xu)(z)
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			navigationType: "global-settings",
			hasPermission: z => !(0, s.yD)(z) && !!(0, p.ZB)(z, "logs", "instant_log") && !!(0, s.rV)(z, "logpush.max_instant_logs_jobs_allowed")
		}, {
			title: "navigation.zone.analytics.log_explorer",
			url: "/analytics/log-explorer",
			labels: ["beta"],
			navigationType: "global-settings",
			hasPermission: z => !!(0, H.V)(z)
		}]
	}, {
		title: "navigation.zone.zone_versioning",
		url: "/versioning",
		navigationType: "global-settings",
		iconType: "git-branch",
		testId: "zone-navigation-link-zone-versioning",
		tabs: w.bB,
		hasPermission: z => !(0, s.yD)(z) && (0, D.m7)(z)
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		navigationType: "global-settings",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: z => (0, o.$n)(z, "dns_records", "dns-record"),
		pages: [{
			title: "navigation.zone.dns.records",
			url: "/dns/records",
			testId: "zone-navigation-link-dns-records",
			navigationType: "global-settings"
		}, {
			title: "navigation.common.analytics",
			url: "/dns/analytics",
			labels: ["new"],
			testId: "zone-navigation-link-dns-overview",
			navigationType: "global-settings",
			hasPermission: z => !!(0, e.z1)("foundation-dns-enabled")(z) && ((0, s.$f)(z, "foundation_dns.advanced_nameservers_allowed") || (0, s.du)(z, "foundation_dns.advanced_nameservers_allowed"))
		}, {
			title: "navigation.zone.dns.settings",
			url: "/dns/settings",
			testId: "zone-navigation-link-dns-settings",
			navigationType: "global-settings"
		}]
	}, {
		title: "navigation.zone.email",
		url: "/email",
		navigationType: "global-settings",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		pages: [{
			title: "navigation.zone.email.routing",
			navigationType: "global-settings",
			url: "/email/routing",
			tabs: S.hg,
			hasPermission: z => (0, o.iY)(z) && !(0, s.yD)(z) && (0, o.$n)(z, "dns_records", "dns-record")
		}, {
			title: "navigation.zone.email.dmarc-reports",
			navigationType: "global-settings",
			url: "/email/dmarc-management",
			labels: ["beta"],
			hasPermission: z => (0, E.ig)(z) ? !1 : (0, o.$n)(z, "dns_records", "dns-record") && !!(0, p.ZB)(z, "email", "dmarc_visible")
		}, {
			title: "navigation.zone.email.security",
			navigationType: "global-settings",
			url: "/email/security"
		}]
	}, {
		title: "navigation.zone.spectrum",
		url: "/spectrum",
		navigationType: "global-settings",
		iconType: "spectrum",
		testId: "zone-navigation-link-spectrum",
		hasPermission: z => {
			const ge = (0, p.nA)(z);
			if ((0, s.yD)(z) || !(0, o.wB)(z, "zone_settings", "spectrum.app") || !ge) return !1;
			const ve = !!((0, C.l8)(z) || (0, p.DQ)(z)),
				ce = !!(0, p.ZB)(z, "spectrum", "enabled"),
				J = !!(0, p.Ns)(ge);
			return ce || ve || !J
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		navigationType: "both",
		hasPermission: z => !(0, s.yD)(z) && (0, o.$n)(z, "ssl", "ssl.cert"),
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls",
			navigationType: "both"
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates",
			navigationType: "both"
		}, {
			title: "navigation.zone.ssl-tls.staging_certs",
			url: "/ssl-tls/staging-certificates",
			navigationType: "global-settings",
			hasPermission: z => (0, s.$f)(z, "staging_certificates")
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			navigationType: "global-settings",
			hasPermission: z => !!(0, e.z1)("client-certificates")(z) || !!(0, p.ZB)(z, "ssl", "client_certificates")
		}, {
			title: "navigation.zone.ssl-tls.origin_server",
			navigationType: "global-settings",
			url: "/ssl-tls/origin"
		}, {
			title: "navigation.zone.ssl-tls.custom_hostnames",
			navigationType: "global-settings",
			url: "/ssl-tls/custom-hostnames"
		}]
	}, {
		title: "navigation.zone.security",
		url: "/security",
		iconType: "shield",
		testId: "zone-navigation-link-security",
		navigationType: "version",
		hasPermission: z => !(0, s.yD)(z) && (0, o.$n)(z, "waf", "firewall.rule") || (0, o.$n)(z, "page_shield", "script-monitor"),
		pages: [{
			title: "navigation.zone.security.analytics",
			navigationType: "version",
			url: "/security/analytics",
			hasPermission: z => (0, d.B_)(z) && (0, o.$n)(z, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			navigationType: "version",
			hasPermission: z => (0, o.$n)(z, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			navigationType: "version",
			tabs: b.gn,
			hasPermission: z => (0, o.$n)(z, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.page_shield",
			navigationType: "global-settings",
			url: "/security/page-shield",
			tabs: b.mt,
			hasPermission: z => (0, o.$n)(z, "page_shield", "script-monitor")
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			navigationType: "version",
			hasPermission: z => (0, o.$n)(z, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			navigationType: "global-settings",
			hasPermission: z => (0, s.du)(z, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed") && (0, o.$n)(z, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			labels: ["new"],
			navigationType: "version",
			hasPermission: z => {
				const ge = (0, p.nA)(z);
				return ge ? !!(0, p.ZB)(z, "firewall", "api_shield_tab") && (0, p.tU)(ge, "business") && (0, o.$n)(z, "waf", "firewall.rule") : !1
			},
			tabs: b.Dw
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos",
			navigationType: "version",
			hasPermission: z => (0, o.$n)(z, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings",
			navigationType: "version",
			hasPermission: z => (0, o.$n)(z, "waf", "firewall.rule")
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		navigationType: "global-settings",
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: z => !(0, s.yD)(z) && ((0, o.wB)(z, "access", "access.app") || (0, o.wB)(z, "access", "access.zone.app"))
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		navigationType: "version",
		hasPermission: z => !(0, s.yD)(z) && (0, o.$n)(z, "zone_settings", "setting"),
		pages: [{
			title: "navigation.zone.speed.test",
			url: "/speed/test",
			navigationType: "version",
			labels: ["beta"]
		}, {
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization",
			navigationType: "version",
			tabs: Q.x
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		navigationType: "global-settings",
		hasPermission: z => !(0, s.yD)(z) && (0, o.$n)(z, "zone_settings", "setting"),
		pages: [{
			title: "navigation.common.overview",
			navigationType: "global-settings",
			url: "/caching",
			tabs: k
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration",
			navigationType: "both"
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/caching/cache-rules",
			navigationType: "version",
			hasPermission: z => (0, o.$n)(z, "waf", "firewall.rule") || (0, o.$n)(z, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			navigationType: "version",
			hasPermission: z => (0, o.iY)(z)
		}, {
			title: "navigation.zone.caching.cache_reserve",
			navigationType: "global-settings",
			url: "/caching/cache-reserve"
		}]
	}, {
		title: "navigation.zone.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		navigationType: "version",
		hasPermission: z => !(0, s.yD)(z) && (0, o.wB)(z, "worker", "worker.route")
	}, {
		title: "navigation.zone.rules",
		url: "/rules/configuration-rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		navigationType: "version",
		hasPermission: z => !(0, s.yD)(z) && (0, o.$n)(z, "zone_settings", "page-rule"),
		pages: [{
			title: "navigation.zone.rules.configuration_rules",
			url: "/rules/configuration-rules",
			navigationType: "version",
			hasPermission: z => (0, o.$n)(z, "waf", "firewall.rule") || (0, o.$n)(z, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.rules.snippets",
			url: "/rules/snippets",
			labels: ["alpha"],
			navigationType: "version",
			hasPermission: z => (!!(0, j.GM)(z) || !!(0, e.z1)("snippets-enabled")(z)) && (0, o.$n)(z, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			navigationType: "version",
			tabs: h.m
		}, {
			title: "navigation.zone.rules.redirect_rules",
			url: "/rules/redirect-rules",
			navigationType: "version",
			hasPermission: z => (0, o.$n)(z, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			navigationType: "version",
			hasPermission: z => (0, o.$n)(z, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/rules/cache-rules",
			navigationType: "version",
			hasPermission: z => (0, o.$n)(z, "zone_settings", "setting") && ((0, o.$n)(z, "waf", "firewall.rule") || (0, o.$n)(z, "zone_settings", "page-rule"))
		}, {
			title: "navigation.zone.rules.compression_rules",
			url: "/rules/compression-rules",
			navigationType: "version",
			hasPermission: z => (0, o.$n)(z, "waf", "page-rule", "read") && !!(0, s.rV)(z, "rulesets.response_compression_max_rules") && !!(0, e.z1)("compression-rules")(z)
		}, {
			title: "navigation.zone.rules.page_rules",
			url: "/rules",
			navigationType: "version"
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			navigationType: "version",
			hasPermission: z => (0, o.$n)(z, "waf", "page-rule", "read")
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		navigationType: "both",
		hasPermission: z => !(0, s.yD)(z) && (0, o.$n)(z, "zone_settings", "setting")
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		navigationType: "version",
		hasPermission: z => (0, o.$n)(z, "lb", "load-balancer") || (0, o.$n)(z, "waitingroom", "waiting-room"),
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			navigationType: "global-settings",
			hasPermission: z => !(0, s.yD)(z)
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			navigationType: "global-settings",
			hasPermission: z => (0, o.iY)(z)
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			navigationType: "global-settings",
			hasPermission: z => (0, o.iY)(z)
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			navigationType: "global-settings",
			hasPermission: z => !(0, s.yD)(z)
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			navigationType: "global-settings",
			hasPermission: z => !(0, s.yD)(z) && !!(0, u.Ek)(z, "healthCheckEventsAdaptiveGroups")
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			navigationType: "global-settings",
			hasPermission: z => !(0, s.yD)(z) && ((0, s.du)(z, "waiting_rooms.allowed") || !!(0, p.ZB)(z, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		navigationType: "version",
		hasPermission: z => !(0, s.yD)(z) && (0, o.$n)(z, "zone_settings", "custom-page")
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		navigationType: "global-settings",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: z => !(0, s.yD)(z) && (0, o.$n)(z, "app", "com.cloudflare.api.app.manage", "edit")
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		navigationType: "version",
		hasPermission: z => !(0, s.yD)(z) && (0, o.$n)(z, "zone_settings", "setting")
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		navigationType: "global-settings",
		labels: z => [],
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: z => !(0, s.yD)(z) && (0, o.$n)(z, "zaraz", "zaraz"),
		pages: [{
			title: "navigation.zone.zaraz.tools.configuration",
			navigationType: "global-settings",
			url: "/zaraz/tools-config",
			tabs: y.az
		}, {
			title: "navigation.zone.zaraz.consent",
			navigationType: "global-settings",
			url: "/zaraz/consent"
		}, {
			title: "navigation.zone.zaraz.history",
			navigationType: "global-settings",
			url: "/zaraz/history"
		}, {
			title: "navigation.zone.zaraz.monitoring",
			navigationType: "global-settings",
			url: "/zaraz/monitoring"
		}, {
			title: "navigation.zone.zaraz.settings",
			navigationType: "global-settings",
			url: "/zaraz/settings"
		}, {
			title: "navigation.zone.zaraz.plans",
			navigationType: "global-settings",
			url: "/zaraz/plans",
			hasPermission: z => !!(0, oe.GM)(z) && !!(0, e.z1)("zaraz-plans-page-access")(z)
		}]
	}, {
		title: "navigation.zone.web3.title",
		url: "/web3",
		navigationType: "global-settings",
		iconType: "web3",
		hasPermission: z => {
			const ge = (0, a.uF)(z);
			return ((ge == null ? void 0 : ge.roles) || []).includes("Trust and Safety") ? !1 : !(0, s.yD)(z)
		}
	}],
	zeroTrust: [{
		url: () => (0, x.Uj)("home"),
		title: "navigation.account.zero_trust",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, x.Uj)("analytics/access"),
		title: "navigation.account.zero_trust.analytics",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, x.Uj)("gateway/locations"),
		title: "navigation.account.zero_trust.gateway",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, x.Uj)("access/apps"),
		title: "navigation.account.zero_trust.access",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, x.Uj)("team/devices"),
		title: "navigation.account.zero_trust.my_team",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, x.Uj)("logs/admin"),
		title: "navigation.account.zero_trust.logs",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, x.Uj)("settings"),
		title: "navigation.account.zero_trust.settings",
		iconType: "cloudflare-zero-trust"
	}],
	support: N.G
}