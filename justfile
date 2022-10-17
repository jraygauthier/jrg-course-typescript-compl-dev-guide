default:
    @just --list

node2nix:
	./.nix/node2nix/generate.sh
