CREATE TABLE `callback` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`phone` varchar(10) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `callback_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `contact_us` (
	`id` int AUTO_INCREMENT NOT NULL,
	`first_name` varchar(255) NOT NULL,
	`last_name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`phone` varchar(10) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contact_us_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `services` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`banner_image` varchar(255) NOT NULL,
	`desc` longtext NOT NULL,
	`expires_at` datetime NOT NULL,
	CONSTRAINT `services_id` PRIMARY KEY(`id`),
	CONSTRAINT `services_id_unique` UNIQUE(`id`),
	CONSTRAINT `services_title_unique` UNIQUE(`title`),
	CONSTRAINT `services_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `services_survey` (
	`id` int AUTO_INCREMENT NOT NULL,
	`full_name` varchar(255) NOT NULL,
	`organization_name` varchar(255) NOT NULL,
	`organization_email` varchar(255) NOT NULL,
	`organization_phone` varchar(255) NOT NULL,
	`pathname` varchar(255) NOT NULL,
	`survey_data` json NOT NULL,
	`created_at` datetime NOT NULL DEFAULT '2024-05-02 18:21:53.847',
	CONSTRAINT `services_survey_id` PRIMARY KEY(`id`),
	CONSTRAINT `services_survey_id_unique` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE TABLE `sessions` (
	`id` varchar(255) NOT NULL,
	`user_id` varchar(255) NOT NULL,
	`expires_at` datetime NOT NULL,
	CONSTRAINT `sessions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` varchar(255) NOT NULL,
	`username` varchar(255) NOT NULL,
	`first_name` varchar(255) NOT NULL,
	`last_name` varchar(255) NOT NULL,
	`hashed_password` varchar(255) NOT NULL,
	`role` enum('user','admin') NOT NULL DEFAULT 'user',
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_username_unique` UNIQUE(`username`)
);
--> statement-breakpoint
ALTER TABLE `sessions` ADD CONSTRAINT `sessions_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;