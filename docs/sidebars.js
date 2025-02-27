/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    adminSidebar: [
        {
            type: "category",
            label: "Getting Started",
            collapsible: true,
            items: [
                {
                    type: "category",
                    label: "Installation",
                    collapsible: false,
                    items: [
                        {
                            type: "doc",
                            id: "getting-started/install",
                        },
                        {
                            type: "doc",
                            id: "getting-started/domain",
                        },
                        {
                            type: "doc",
                            id: "getting-started/single-sign-on",
                        },
                        {
                            type: "doc",
                            id: "getting-started/troubleshooting",
                        },
                    ],
                },
                {
                    type: "doc",
                    id: "getting-started/explore",
                },
            ],
        },
        {
            type: "category",
            label: "Projects",
            collapsible: true,
            items: [
                {
                    type: "doc",
                    id: "projects/what-are-projects",
                },
                {
                    type: "category",
                    label: "Using Projects",
                    collapsible: false,
                    items: [
                        {
                            type: "doc",
                            id: "projects/create",
                        },
                        {
                            type: "doc",
                            id: "projects/quotas",
                        },
                        {
                            type: "doc",
                            id: "projects/members",
                        },
                        {
                            type: "doc",
                            id: "projects/templates",
                        },
                        {
                            type: "doc",
                            id: "projects/clusters",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Integrations",
                    items: [
                        {
                            type: "doc",
                            id: "projects/argocd",
                        },
                    ],
                },
                {
                    type: "doc",
                    id: "projects/secrets",
                },
            ],
        },
        {
            type: "category",
            label: "Virtual Clusters",
            items: [
                {
                    type: "doc",
                    id: "virtual-clusters/what-are-virtual-clusters",
                },
                {
                    type: "category",
                    label: "Using Virtual Clusters",
                    collapsible: false,
                    items: [
                        {
                            type: "doc",
                            id: "virtual-clusters/create",
                        },
                        {
                            type: "doc",
                            id: "virtual-clusters/retrieve-kube-config",
                        },
                        {
                            type: "doc",
                            id: "virtual-clusters/manage-access",
                        },
                        {
                            type: "doc",
                            id: "virtual-clusters/prevent-deletion",
                        },
                    ],
                },
                {
                    type: "doc",
                    id: "virtual-clusters/templates",
                },
                {
                    type: "doc",
                    id: "virtual-clusters/sleep-mode",
                },
                {
                    type: "category",
                    label: "Integrations",
                    items: [
                        {
                            type: "doc",
                            id: "virtual-clusters/argocd",
                        },
                        {
                            type: "doc",
                            id: "virtual-clusters/github-actions",
                        },
                        {
                            type: "doc",
                            id: "virtual-clusters/gitlab-ci",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Advanced Topics",
                    items: [
                        {
                            type: "doc",
                            id: "virtual-clusters/import-vclusters",
                        },
                        {
                            type: "doc",
                            id: "virtual-clusters/ingress-access",
                        },
                        {
                            type: "doc",
                            id: "virtual-clusters/apps",
                        },
                        {
                            type: "doc",
                            id: "virtual-clusters/isolation",
                        },
                        {
                            type: "doc",
                            id: "virtual-clusters/virtual-cluster-config",
                        },
                        {
                            type: "doc",
                            id: "virtual-clusters/custom-links",
                        },
                        {
                            type: "doc",
                            id: "virtual-clusters/central-hostpath-mapper",
                        },
                        {
                            type: "doc",
                            id: "virtual-clusters/remote-vclusters",
                        },
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Clusters",
            items: [
                {
                    type: "doc",
                    id: "clusters/what-are-clusters",
                },
                {
                    type: "category",
                    label: "Using Clusters",
                    collapsible: false,
                    items: [
                        {
                            type: "doc",
                            id: "clusters/connect-cluster",
                        },
                    ],
                },
                {
                    type: "doc",
                    id: "clusters/cluster-roles",
                },
                {
                    type: "doc",
                    id: "clusters/cluster-access",
                },
                {
                    type: "category",
                    label: "Advanced Topics",
                    items: [
                        {
                            type: "doc",
                            id: "clusters/multi-region-mode",
                        },
                        {
                            type: "doc",
                            id: "clusters/ingress-suffix",
                        },
                        {
                            type: "doc",
                            id: "clusters/agent-config",
                        },
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Spaces",
            items: [
                {
                    type: "doc",
                    id: "spaces/what-are-spaces",
                },
                {
                    type: "category",
                    label: "Using Spaces",
                    collapsible: false,
                    items: [
                        {
                            type: "doc",
                            id: "spaces/create",
                        },
                        {
                            type: "doc",
                            id: "spaces/retrieve-kube-config",
                        },
                        {
                            type: "doc",
                            id: "spaces/manage-access",
                        },
                        {
                            type: "doc",
                            id: "spaces/prevent-deletion",
                        },
                    ],
                },
                {
                    type: "doc",
                    id: "spaces/sleep-mode",
                },
                {
                    type: "doc",
                    id: "spaces/templates",
                },
                {
                    type: "category",
                    label: "Integrations",
                    items: [
                        {
                            type: "doc",
                            id: "spaces/github-actions",
                        },
                        {
                            type: "doc",
                            id: "spaces/gitlab-ci",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Advanced Topics",
                    items: [
                        {
                            type: "doc",
                            id: "spaces/import-namespaces",
                        },
                        {
                            type: "doc",
                            id: "spaces/apps",
                        },
                        {
                            type: "doc",
                            id: "spaces/isolation",
                        },
                        {
                            type: "doc",
                            id: "spaces/custom-links",
                        },
                    ],
                },
            ],
        },

        {
            type: "category",
            label: "Apps",
            items: [
                {
                    type: "doc",
                    id: "apps/what-are-apps",
                },
                {
                    type: "category",
                    label: "Using Apps",
                    collapsible: false,
                    items: [
                        {
                            type: "doc",
                            id: "apps/create",
                        },
                        {
                            type: "doc",
                            id: "apps/use-in-templates",
                        },
                        {
                            type: "doc",
                            id: "apps/use-on-demand",
                        },
                    ],
                },
                {
                    type: "doc",
                    id: "apps/versioning",
                },
                {
                    type: "doc",
                    id: "apps/parameters",
                },
            ],
        },
        {
            type: "category",
            label: "Secrets",
            items: [
                "secrets/what-are-secrets",
                {
                    type: "category",
                    label: "Using Project Secrets",
                    collapsible: false,
                    items: [
                        "secrets/create-project-secrets",
                        "secrets/delete-project-secrets",
                        "secrets/retrieve-project-secrets",
                    ],
                },
                {
                    type: "category",
                    label: "Using Global Secrets",
                    collapsible: false,
                    items: [
                        "secrets/create-global-secrets",
                        "secrets/delete-global-secrets",
                        "secrets/use-in-projects",
                    ],
                },
                "secrets/secret-sync",
                "secrets/hashicorp-vault",
            ],
        },
        {
            type: "category",
            label: "Users + Teams",
            items: [
                "users/what-are-users-and-teams",
                {
                    type: "category",
                    label: "Managing Users",
                    collapsible: false,
                    items: [
                        "users/create-users",
                        "users/suspend-users",
                        "users/impersonate",
                    ],
                },
                {
                    type: "category",
                    label: "Managing Teams",
                    collapsible: false,
                    items: ["users/create-teams", "users/sso-group-sync"],
                },
                {
                    type: "category",
                    label: "SSO",
                    items: [
                        "users/openid-connect",
                        "users/saml",
                        "users/okta",
                        "users/github",
                        "users/gitlab",
                        "users/google",
                        "users/microsoft",
                        "users/ldap",
                        "users/other-dex",
                        "users/multiple-sso",
                    ],
                },
                {
                    type: "category",
                    label: "Advanced Topics",
                    items: ["users/access-keys", "users/loft-management-roles"],
                },
            ],
        },
        {
            type: "category",
            label: "Administration",
            items: [
                {
                    type: "doc",
                    id: "admin/upgrade-loft",
                },
                {
                    type: "doc",
                    id: "admin/config",
                },
                {
                    type: "doc",
                    id: "admin/uninstall",
                },
                {
                    type: "category",
                    label: "Advanced Topics",
                    collapsible: true,
                    items: [
                        "admin/guides/install-with-helm",
                        "admin/guides/offline-installations",
                        "admin/guides/high-availability",
                        "admin/backup-restore-loft",
                        "admin/guides/metrics",
                        "admin/guides/oidc-provider",
                        "admin/guides/custom-branding",
                        "admin/audit",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Guides",
            items: [
                "guides/preview-environments",
                "guides/upgrade-2-to-3",
                "guides/gitops",
                "guides/managing-permissions",
            ],
        },
        {
            type: "category",
            label: "API",
            items: [
                "api/authentication",
                "api/use-api",
                {
                    type: "category",
                    label: "Reference",
                    items: [
                        {
                            type: "category",
                            label: "Projects",
                            items: [
                                "api/resources/project/project",
                                "api/resources/project/importvcluster",
                                "api/resources/project/importspace",
                                "api/resources/project/migratevirtualclusterinstance",
                                "api/resources/project/migratespaceinstance",
                                "api/resources/project/members",
                                "api/resources/project/templates",
                                "api/resources/project/clusters",
                            ],
                        },
                        {
                            type: "category",
                            label: "Virtual Clusters",
                            items: [
                                "api/resources/virtualclusterinstance/virtualclusterinstance",
                                "api/resources/virtualclusterinstance/kubeconfig",
                            ],
                        },
                        "api/resources/virtualclustertemplate",
                        {
                            type: "category",
                            label: "Spaces",
                            items: [
                                "api/resources/spaceinstance/spaceinstance",
                            ],
                        },
                        "api/resources/spacetemplate",
                        "api/resources/apps",
                        {
                            type: "category",
                            label: "Clusters",
                            items: [
                                "api/resources/clusters/clusters",
                                "api/resources/clusters/clusterconnect",
                            ],
                        },
                        {
                            type: "category",
                            label: "DevPod Workspaces",
                            items: [
                                "api/resources/devpodworkspaceinstance/devpodworkspaceinstance",
                                "api/devpod/commands",
                            ],
                        },
                        "api/resources/devpodworkspacetemplate",
                        {
                            type: "category",
                            label: "Runners",
                            items: [
                                "api/resources/runner/runner",
                                "api/resources/runner/accesskey",
                            ],
                        },
                        "api/resources/clusteraccess",
                        "api/resources/user",
                        "api/resources/team",
                        "api/resources/sharedsecret",
                        "api/resources/ownedaccesskey",
                        "api/resources/directclusterendpointtoken",
                        "api/resources/config",
                        "api/resources/self",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "CLI",
            items: [
                {
                    type: "autogenerated",
                    dirName: "cli",
                },
            ],
        },
        {
            type: "link",
            label: "DevSpace",
            href: "https://devspace.sh/",
        },
    ],
};
