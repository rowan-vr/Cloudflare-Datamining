const navigation = {
	root: [{
		title: "navigation.root.accounts",
		url: "/",
		iconType: "user-multi"
	}, {
		title: "navigation.root.websites",
		url: "/websites",
		iconType: "internet-browser"
	}, {
		title: "navigation.root.profile",
		url: "/profile",
		iconType: "user-outline"
	}],
	profile: [{
		title: "navigation.profile.preferences",
		url: "/",
		iconType: "edit"
	}, {
		title: "navigation.profile.access_management",
		url: "/access-management",
		iconType: "lock",
		hasPermission: function(m) {
			return !!(0, n.z1)("oauth-access-management")(m)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(m) {
			return !(0, y.n3)() && !(0, n.z1)("oauth-access-management")(m)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(m) {
			return !(0, n.z1)("oauth-access-management")(m)
		}
	}],
	account: [{
		title: "navigation.root.websites",
		url: "/",
		iconType: "internet-browser"
	}, {
		title: function(m) {
			return (0, n.z1)("registrar-account-home-copy-experiment")(m) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(m) {
				return S(m)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			labels: ["new"],
			hasPermission: function(m) {
				return S(m)
			}
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			hasPermission: function(m) {
				return B(m)
			}
		}]
	}, {
		title: "navigation.common.analytics",
		url: "",
		iconType: "chart",
		pages: [{
			title: "navigation.account.account_analytics",
			url: "/analytics",
			labels: ["beta"],
			hasPermission: function(m) {
				return d(m)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics",
			hasPermission: function(m) {
				return d(m) && !!(0, t.getAccountFlipperFlag)(m, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(m) {
				return d(m)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(m) {
				return d(m) && !!(0, t.getAccountFlipperFlag)(m, "account_analytics", "carbon_dashboard")
			}
		}, {
			title: "account.magic.network_monitoring.navigation",
			url: "/network-monitoring",
			labels: ["beta"],
			hasPermission: function(m) {
				return d(m) && !!(0, t.getAccountFlipperFlag)(m, "account_analytics", "magic_network_monitoring")
			}
		}]
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(m) {
			return d(m) && (0, T.dU)(m)
		}
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "user-multi",
		hasPermission: function(m) {
			return d(m) && (!!(0, t.getAccountFlipperFlag)(m, "calls", "enabled") || !!(0, t.getAccountFlipperFlag)(m, "Calls", "enabled"))
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(m) {
			return d(m)
		}
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(m) {
			return d(m)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(m) {
				return !!(0, t.getAccountFlipperFlag)(m, "workers", "origin_workers") && !!(0, t.getAccountFlipperFlag)(m, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: ["beta"],
			hasPermission: function(m) {
				return !!(0, n.z1)("queues-ui")(m)
			}
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(m) {
				return !!(0, t.getAccountFlipperFlag)(m, "workers", "cfsql_bindings")
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: function(m) {
				var F = (0, Q.getSubscriptions)(m);
				return !(0, V.ky)(F, [q.uD.UnboundEnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: function(m) {
			return !!(0, n.z1)("workers-for-platforms")(m) && d(m) && ((0, M.hasEnterpriseAccountEntitlement)(m) || !!(0, t.getAccountFlipperFlag)(m, "workers", "workers_for_saas"))
		}
	}, {
		title: "navigation.account.r2",
		url: "/r2",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: function(m) {
			return d(m)
		}
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(m) {
			return d(m)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(m) {
				return o(m)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(m) {
				return o(m)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(m) {
				return o(m)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		labels: ["new"],
		hasPermission: function(m) {
			return d(m) && !!(0, t.getAccountFlipperFlag)(m, "cloudflare_images", "early_release_access")
		},
		pages: [{
			title: "navigation.account.images",
			url: "/images/images",
			hasPermission: function(m) {
				return p(m)
			}
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: function(m) {
				return p(m)
			}
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: function(m) {
				return p(m)
			}
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			hasPermission: function(m) {
				return p(m)
			},
			labels: ["beta"]
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(m) {
			return d(m) && (0, D.xU)(m)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(m) {
				return d(m) && (0, D.sL)(m)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(m) {
				return d(m) && (0, D.sL)(m)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(m) {
				return d(m) && (0, D.TT)(m)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			hasPermission: function(m) {
				return d(m) && (0, D.jD)(m)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			hasPermission: function(m) {
				return d(m) && (0, D.BU)(m)
			}
		}, {
			title: "navigation.account.security_center.cfone",
			url: "/security-center/cloudforce-one",
			hasPermission: function(m) {
				return d(m) && (0, D.sK)(m)
			}
		}]
	}, {
		title: "navigation.account.firewall_rulesets",
		url: "/application-security",
		iconType: "cloudflare-security-application",
		hasPermission: function(m) {
			return d(m) && !!ne(m)
		},
		pages: [{
			title: "navigation.account.firewall_rulesets.application_firewall",
			url: "/application-security/waf",
			hasPermission: function(m) {
				return !!ne(m)
			}
		}]
	}, {
		title: "navigation.account.network_security",
		url: "/network-security",
		iconType: "cloudflare-security-network",
		hasPermission: function(m) {
			return d(m) && !!R(m)
		},
		pages: [{
			title: "navigation.account.firewall_rulesets.ddos",
			url: "/network-security/ddos",
			hasPermission: function(m) {
				var F = !!_(m) && !!z(m);
				return !!l(m) || F
			}
		}, {
			title: "navigation.account.firewall_rulesets.magic_firewall",
			url: "/network-security/magic_firewall",
			testId: "account-magic-firewall-rules",
			hasPermission: function(m) {
				return !!R(m)
			}
		}]
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		labels: ["beta"],
		hasPermission: function(m) {
			return d(m) && !!(0, n.z1)("managed-challenge-ui")(m)
		}
	}, {
		title: "navigation.account.teams",
		url: "https://one.dash.cloudflare.com",
		iconType: "cloudflare-zero-trust",
		labels: ["external-link"],
		hasPermission: function(m) {
			return d(m)
		}
	}, {
		title: "navigation.account.ip_prefixes",
		url: "/ip-prefixes",
		iconType: "network",
		labels: ["new"],
		hasPermission: function(m) {
			return d(m) && !!(0, t.getAccountFlipperFlag)(m, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: function(m) {
			return d(m) && !!(0, t.getAccountFlipperFlag)(m, "magic_transit", "mt_home")
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(m) {
			return d(m) && !!(0, t.getAccountFlipperFlag)(m, "magic_wan", "mw_home")
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(m) {
			return d(m)
		}
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(m) {
			return d(m)
		}
	}, {
		title: "navigation.account.manage_account",
		url: "",
		iconType: "gear",
		labels: ["border-top"],
		testId: "manage-account-link",
		pages: [{
			title: "navigation.account.members",
			url: "/members",
			testId: "account-homepage-members",
			hasPermission: function(m) {
				return d(m)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(m) {
				return (0, I.b)(m) ? d(m) : (0, t.getPermission)(m)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(m) {
				return d(m)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(m) {
				return d(m)
			}
		}]
	}],
	zone: [{
		title: "navigation.common.overview",
		url: "/",
		iconType: "clipboard",
		testId: "zone-navigation-link-overview"
	}, {
		title: "navigation.common.analytics",
		url: "/analytics",
		iconType: "chart",
		testId: "zone-navigation-link-analytics",
		hasPermission: function(m) {
			return h(m, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			hasPermission: function(m) {
				return !(0, M.zoneIsDNSOnly)(m)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			hasPermission: function(m) {
				return !(0, M.zoneIsDNSOnly)(m)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			hasPermission: function(m) {
				return !(0, M.zoneIsDNSOnly)(m)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			hasPermission: function(m) {
				var F = (0, i.getZone)(m);
				return F ? !!(!(0, M.zoneIsDNSOnly)(m) && !!(0, i.getZoneFlipperFlag)(m, "origin_reachability_dash", "dash_view") && (0, i.isPlanAtLeast)(F, "enterprise") && !!(0, s.getZoneGraphQLSettingEnabled)(m, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			hasPermission: function(m) {
				var F = (0, i.getZone)(m);
				return F ? !!(!(0, M.zoneIsDNSOnly)(m) && !!(0, i.getZoneFlipperFlag)(m, "edge_reachability_dash", "dash_view") && (0, i.isPlanAtLeast)(F, "enterprise") && !!(0, s.getZoneGraphQLSettingEnabled)(m, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			hasPermission: function(m) {
				return !(0, M.zoneIsDNSOnly)(m)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			hasPermission: function(m) {
				return Object.values((0, P.H_)(m)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			hasPermission: function(m) {
				return !(0, M.zoneIsDNSOnly)(m) && !!(0, i.getZoneFlipperFlag)(m, "logs", "instant_log") && !!(0, M.getZoneEntitlement)(m, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(m) {
			return h(m, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.dns.records",
			url: "/dns/records",
			testId: "zone-navigation-link-dns-records",
			hasPermission: function(m) {
				return !!(0, n.z1)("dns-tab-sections")(m)
			}
		}, {
			title: "navigation.zone.dns.settings",
			url: "/dns/settings",
			testId: "zone-navigation-link-dns-settings",
			hasPermission: function(m) {
				return !!(0, n.z1)("dns-tab-sections")(m)
			}
		}]
	}, {
		title: "navigation.zone.email",
		url: "/email",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m) && h(m, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.email.routing",
			url: "/email/routing"
		}, {
			title: "navigation.zone.email.security",
			url: "/email/security"
		}]
	}, {
		title: "navigation.zone.spectrum",
		url: "/spectrum",
		iconType: "spectrum",
		testId: "zone-navigation-link-spectrum",
		hasPermission: function(m) {
			var F = (0, i.getZone)(m);
			if ((0, M.zoneIsDNSOnly)(m) || !x(m, "zone_settings", "spectrum.app") || !F) return !1;
			var K = !!((0, u.userHasEntZones)(m) || (0, i.userHasDelegatedEntZones)(m)),
				me = !!(0, i.getZoneFlipperFlag)(m, "spectrum", "enabled"),
				ye = !!(0, i.isFree)(F);
			return me || K || !ye
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m) && h(m, "ssl", "ssl.cert")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls"
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates"
		}, {
			title: "navigation.zone.ssl-tls.staging_certs",
			url: "/ssl-tls/staging-certificates",
			hasPermission: function(m) {
				return (0, M.hasAccountEntitlement)(m, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			hasPermission: function(m) {
				return !!(0, n.z1)("client-certificates")(m) || !!(0, i.getZoneFlipperFlag)(m, "ssl", "client_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.origin_server",
			url: "/ssl-tls/origin"
		}, {
			title: "navigation.zone.ssl-tls.custom_hostnames",
			url: "/ssl-tls/custom-hostnames"
		}]
	}, {
		title: "navigation.zone.security",
		url: "/security",
		iconType: "shield",
		testId: "zone-navigation-link-security",
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m) && h(m, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/security"
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			hasPermission: function(m) {
				return (0, b.B_)(m)
			}
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf"
		}, {
			title: "navigation.zone.security.page_shield",
			url: "/security/page-shield"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			hasPermission: function(m) {
				return !!(0, t.getAccountFlipperFlag)(m, "bots", "paygo")
			}
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			hasPermission: function(m) {
				return (0, M.hasZoneEntitlement)(m, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			labels: ["new"],
			hasPermission: function(m) {
				var F = (0, i.getZone)(m);
				return F ? !!(0, i.getZoneFlipperFlag)(m, "firewall", "api_shield_tab") && (0, i.isPlanAtLeast)(F, "business") : !1
			}
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos"
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings"
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m) && (x(m, "access", "access.app") || x(m, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m) && h(m, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/speed"
		}, {
			title: "navigation.zone.speed.test",
			url: "/speed/test",
			hasPermission: function(m) {
				return (0, n.z1)("speed-test-result")(m) === !0
			}
		}, {
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}, {
			title: "navigation.zone.speed.browser_insights",
			url: "/speed/browser-insights"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m) && h(m, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/caching"
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/caching/cache-rules",
			labels: ["beta"],
			hasPermission: function(m) {
				return h(m, "waf", "firewall.rule") || h(m, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(m) {
				return d(m)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			url: "/caching/cache-reserve",
			labels: ["beta"],
			hasPermission: function(m) {
				return !!re(m)
			}
		}]
	}, {
		title: "navigation.zone.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m) && x(m, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m) && h(m, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.configuration_rules",
			labels: ["beta"],
			url: "/rules/configuration-rules",
			hasPermission: function(m) {
				return h(m, "waf", "firewall.rule") || h(m, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules"
		}, {
			title: "navigation.zone.rules.redirect_rules",
			labels: ["beta"],
			url: "/rules/redirect-rules",
			hasPermission: function(m) {
				return h(m, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			hasPermission: function(m) {
				return h(m, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(m) {
				return h(m, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m) && h(m, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		hasPermission: function(m) {
			return h(m, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(m) {
				return !(0, M.zoneIsDNSOnly)(m)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			hasPermission: function(m) {
				return !(0, M.zoneIsDNSOnly)(m)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			hasPermission: function(m) {
				return d(m)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			hasPermission: function(m) {
				return d(m)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			hasPermission: function(m) {
				return !(0, M.zoneIsDNSOnly)(m)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			hasPermission: function(m) {
				return !(0, M.zoneIsDNSOnly)(m) && !!(0, s.getZoneGraphQLSettingEnabled)(m, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			hasPermission: function(m) {
				return !(0, M.zoneIsDNSOnly)(m) && ((0, M.hasZoneEntitlement)(m, "waiting_rooms.allowed") || !!(0, i.getZoneFlipperFlag)(m, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m) && h(m, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m) && h(m, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m) && h(m, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		labels: function(m) {
			var F = [],
				K = (0, i.getZone)(m);
			return K && !(0, i.isPlanAtLeast)(K, "pro") && F.push("beta"), F
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m) && h(m, "zaraz", "zaraz")
		},
		pages: [{
			title: "navigation.zone.zaraz.tools",
			url: "/zaraz"
		}, {
			title: "navigation.zone.zaraz.triggers",
			url: "/zaraz/triggers"
		}, {
			title: "navigation.zone.zaraz.consent",
			hasPermission: function(m) {
				var F = (0, i.getZone)(m);
				return !!(F && !(0, i.isPlanAtLeast)(F, "pro"))
			},
			url: "/zaraz/consent"
		}, {
			title: "navigation.zone.zaraz.variables",
			url: "/zaraz/variables"
		}, {
			title: "navigation.zone.zaraz.settings",
			url: "/zaraz/settings"
		}]
	}, {
		title: "navigation.zone.web3",
		url: "/web3",
		iconType: "web3",
		labels: ["new"],
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m)
		}
	}],
	application: [{
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m) && h(m, "ssl", "ssl.cert")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls"
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates"
		}]
	}, {
		title: "navigation.zone.security",
		url: "/security/waf",
		iconType: "shield",
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m) && h(m, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.events",
			url: "/security/events",
			hasPermission: function(m) {
				return (0, b.B_)(m)
			}
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			hasPermission: function(m) {
				return !!(0, t.getAccountFlipperFlag)(m, "bots", "paygo")
			}
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos"
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings"
		}]
	}, {
		title: "navigation.zone.speed",
		url: "/speed/optimization",
		iconType: "bolt",
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m) && h(m, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m) && h(m, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(m) {
				return d(m)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m) && h(m, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m) && h(m, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(m) {
				return h(m, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			hasPermission: function(m) {
				return h(m, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(m) {
				return h(m, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m) && h(m, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(m) {
			return h(m, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(m) {
				return !(0, M.zoneIsDNSOnly)(m)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m) && h(m, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(m) {
			return !(0, M.zoneIsDNSOnly)(m) && h(m, "zone_settings", "setting")
		}
	}]
}